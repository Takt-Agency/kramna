import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Slow, warm particle field — evokes gold dust drifting in studio light.
 */
export default function GoldParticles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1
      speeds[i] = 0.05 + Math.random() * 0.08
    }
    return { positions, speeds }
  }, [count])

  useFrame((_, delta) => {
    const pts = ref.current
    if (!pts) return
    const arr = pts.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta * 0.4
      if (arr[i * 3 + 1] > 2.6) arr[i * 3 + 1] = -2.6
    }
    pts.geometry.attributes.position.needsUpdate = true
    pts.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#d9b676"
        transparent
        opacity={0.85}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
