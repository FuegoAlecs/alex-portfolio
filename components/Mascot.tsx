'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

export function Mascot() {
  const group = useRef<Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group ref={group} dispose={null}>
      {/* Head */}
      <mesh position={[0, 0.5, 0]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={0.5} />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.8, 1, 0.4]} />
        <meshStandardMaterial color="#B026FF" emissive="#B026FF" emissiveIntensity={0.3} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 0.6, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0.2, 0.6, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
      </mesh>

      {/* Glow Effect */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#00F5FF"
          transparent
          opacity={0.1}
          emissive="#00F5FF"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
} 