import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Stylized 3D fig built procedurally.
 *
 * PLACEHOLDER NOTE: this is a stylized geometric interpretation of a fig, not a
 * scanned photorealistic model. To swap in a real asset, drop a `.glb` file at
 * `public/models/fig.glb` and replace this component's return with a `useGLTF`
 * import from @react-three/drei. The rest of the scene (lighting, particles,
 * camera) is designed to receive that model without changes.
 */
export default function FigModel({
  hover = 0,
}: {
  hover?: number
}) {
  const group = useRef<THREE.Group>(null!)
  const stemRef = useRef<THREE.Mesh>(null!)
  const leafRef = useRef<THREE.Mesh>(null!)

  // Fig body: lathe geometry (pear/onion silhouette) — feels like a fig
  const figGeometry = useMemo(() => {
    const points: THREE.Vector2[] = []
    // silhouette from top (stem) down to bottom tip
    // (x = radius, y = height)
    const profile: [number, number][] = [
      [0.02, 1.05],
      [0.14, 1.0],
      [0.32, 0.92],
      [0.55, 0.78],
      [0.78, 0.6],
      [0.92, 0.4],
      [1.0, 0.18],
      [1.02, -0.05],
      [0.98, -0.28],
      [0.86, -0.5],
      [0.66, -0.7],
      [0.4, -0.86],
      [0.16, -0.97],
      [0.02, -1.02],
    ]
    profile.forEach(([r, y]) => points.push(new THREE.Vector2(r, y)))
    const g = new THREE.LatheGeometry(points, 96)
    g.computeVertexNormals()
    return g
  }, [])

  // Curled leaf geometry — flat shape bent slightly
  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    // Simple fig leaf: three-lobed. Approximation with bezier curves.
    shape.moveTo(0, 0)
    shape.bezierCurveTo(0.2, 0.15, 0.35, 0.4, 0.1, 0.55)
    shape.bezierCurveTo(0.3, 0.75, 0.2, 1.0, 0, 1.05)
    shape.bezierCurveTo(-0.2, 1.0, -0.3, 0.75, -0.1, 0.55)
    shape.bezierCurveTo(-0.35, 0.4, -0.2, 0.15, 0, 0)
    const geo = new THREE.ShapeGeometry(shape, 32)
    // Slight vertical curl
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(y * 2.2) * 0.08)
    }
    pos.needsUpdate = true
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.18
    // gentle bob
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.06
    // Slight hover response
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      hover * 0.08,
      0.05,
    )
  })

  return (
    <group ref={group} position={[0, 0, 0]} scale={1.15}>
      {/* Fig body */}
      <mesh geometry={figGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#3b0f3a"
          roughness={0.55}
          metalness={0.05}
          clearcoat={0.35}
          clearcoatRoughness={0.4}
          sheen={0.6}
          sheenColor="#7a2a72"
          sheenRoughness={0.35}
        />
      </mesh>

      {/* Subtle bloom/veins hint — inner darker fill */}
      <mesh geometry={figGeometry} scale={0.985}>
        <meshBasicMaterial color="#26082a" transparent opacity={0.15} />
      </mesh>

      {/* Stem */}
      <mesh
        ref={stemRef}
        position={[0, 1.06, 0]}
        rotation={[0, 0, 0.05]}
      >
        <cylinderGeometry args={[0.045, 0.06, 0.22, 12]} />
        <meshStandardMaterial color="#5f4d2e" roughness={0.9} />
      </mesh>

      {/* Leaf sitting behind the stem */}
      <mesh
        ref={leafRef}
        position={[0.18, 1.12, -0.18]}
        rotation={[-0.35, -0.4, -0.25]}
        scale={0.55}
      >
        <primitive object={leafGeometry} attach="geometry" />
        <meshStandardMaterial
          color="#58634a"
          roughness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}
