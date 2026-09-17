import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Stylized Djebba landscape: layered mountains + rising sun.
 * Everything is procedural — no external textures required.
 */

function Sun() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((s) => {
    if (!ref.current) return
    ref.current.position.y = 0.6 + Math.sin(s.clock.elapsedTime * 0.2) * 0.02
  })
  return (
    <mesh ref={ref} position={[0.6, 0.6, -6]}>
      <circleGeometry args={[0.9, 64]} />
      <meshBasicMaterial color="#e2b968" transparent opacity={0.9} />
    </mesh>
  )
}

function SunHalo() {
  return (
    <mesh position={[0.6, 0.6, -6.05]}>
      <circleGeometry args={[1.6, 64]} />
      <meshBasicMaterial color="#d9a94a" transparent opacity={0.18} />
    </mesh>
  )
}

function MountainLayer({
  z,
  color,
  height,
  seed,
  opacity = 1,
}: {
  z: number
  color: string
  height: number
  seed: number
  opacity?: number
}) {
  // Build a jagged silhouette using a plane deformed at the top edge
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((s) => {
    if (!ref.current) return
    ref.current.position.x =
      Math.sin(s.clock.elapsedTime * 0.05 + seed) * 0.05
  })
  return (
    <mesh ref={ref} position={[0, height * 0.5 - 1.4, z]}>
      <planeGeometry args={[18, height, 96, 1]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
      {/* Silhouette shaping via vertex offset */}
    </mesh>
  )
}

function LayeredMountains() {
  // We generate 4 layers, closest = darkest
  const layers = [
    { z: -5.5, color: '#c8a878', height: 1.9, seed: 1.1, opacity: 1 },
    { z: -4.5, color: '#8b6a4b', height: 2.2, seed: 2.3, opacity: 1 },
    { z: -3.2, color: '#5a3a45', height: 2.6, seed: 3.7, opacity: 1 },
    { z: -1.8, color: '#32102f', height: 2.9, seed: 5.9, opacity: 1 },
  ]

  return (
    <group>
      {layers.map((l, i) => (
        <MountainSilhouette key={i} {...l} />
      ))}
    </group>
  )
}

function MountainSilhouette({
  z,
  color,
  height,
  seed,
  opacity = 1,
}: {
  z: number
  color: string
  height: number
  seed: number
  opacity?: number
}) {
  // Build a shape (jagged top) filled with color
  const geom = (() => {
    const shape = new THREE.Shape()
    const width = 22
    const segments = 40
    shape.moveTo(-width / 2, -2)
    // jagged top
    for (let i = 0; i <= segments; i++) {
      const x = -width / 2 + (i / segments) * width
      const n =
        Math.sin(i * 0.6 + seed) * 0.35 +
        Math.sin(i * 1.3 + seed * 1.7) * 0.2 +
        Math.sin(i * 2.6 + seed * 2.4) * 0.08
      shape.lineTo(x, height * 0.5 + n * height * 0.35)
    }
    shape.lineTo(width / 2, -2)
    shape.closePath()
    return new THREE.ShapeGeometry(shape)
  })()

  const ref = useRef<THREE.Mesh>(null!)
  useFrame((s) => {
    if (!ref.current) return
    ref.current.position.x =
      Math.sin(s.clock.elapsedTime * 0.06 + seed) * 0.06
  })

  return (
    <mesh ref={ref} position={[0, -1.2, z]} geometry={geom}>
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function Fog() {
  return (
    <mesh position={[0, -0.4, -2.6]}>
      <planeGeometry args={[24, 1.4]} />
      <meshBasicMaterial color="#f3e9d7" transparent opacity={0.35} />
    </mesh>
  )
}

export default function TerroirScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 3.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Sky gradient plane */}
      <mesh position={[0, 0, -7]}>
        <planeGeometry args={[30, 12]} />
        <shaderMaterial
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec2 vUv;
            void main() {
              vec3 top = vec3(0.95, 0.82, 0.62);      // warm ivory-gold
              vec3 mid = vec3(0.86, 0.55, 0.42);      // dusk peach
              vec3 bot = vec3(0.40, 0.18, 0.35);      // plum horizon
              float t = smoothstep(0.0, 1.0, vUv.y);
              vec3 col = mix(bot, mid, smoothstep(0.0, 0.55, t));
              col = mix(col, top, smoothstep(0.55, 1.0, t));
              gl_FragColor = vec4(col, 1.0);
            }
          `}
        />
      </mesh>

      <Suspense fallback={null}>
        <SunHalo />
        <Sun />
        <LayeredMountains />
        <Fog />
      </Suspense>
    </Canvas>
  )
}
