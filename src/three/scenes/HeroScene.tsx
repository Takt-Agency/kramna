import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import FigModel from '../models/FigModel'
import GoldParticles from '../effects/GoldParticles'

function CameraRig({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame((state) => {
    const target = new THREE.Vector3(mouse.current.x * 0.6, 0.2 + mouse.current.y * 0.3, 4.4)
    state.camera.position.lerp(target, 0.04)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 })
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)
    const onChange = () => setReduced(media.matches)
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.2, 4.4], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      <color attach="background" args={[0]} />

      {/* Warm studio lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 4, 3]}
        intensity={1.6}
        color="#fff2d6"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 1, -2]} intensity={0.6} color="#4b174a" />
      <pointLight position={[0, -1, 2]} intensity={0.4} color="#d9b676" />

      <Suspense fallback={null}>
        <FigModel />
        <GoldParticles count={reduced ? 60 : 220} />

        <ContactShadows
          position={[0, -1.35, 0]}
          opacity={0.35}
          blur={2.6}
          far={4}
          resolution={512}
          color="#32102f"
        />
        <Environment preset="apartment" />
      </Suspense>

      {!reduced && <CameraRig mouse={mouse} />}
    </Canvas>
  )
}
