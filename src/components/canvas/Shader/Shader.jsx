import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'
import guid from 'short-uuid'

import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.5, 0.7, 0.025),
  },
  vertex,
  fragment
)

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
ColorShiftMaterial.key = guid.generate()

extend({ ColorShiftMaterial })

const Shader = (props) => {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const router = useStore((state) => state.router)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.001
    }
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2)
    }
  })

  return (
    <mesh
      ref={meshRef}
      scale={hovered ? 1.1 : 1}
      onClick={() => {
        //on click action 
        router.push(`/sphere`)
      }}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      {...props}
    >
      <sphereBufferGeometry args={[2,16,16]}/>
      {/* <boxBufferGeometry args={[2,8,8]}/> */}
      {/* @ts-ignore */}
      
      <colorShiftMaterial key={ColorShiftMaterial.key} time={3} />
    </mesh>
  )
}

export default Shader
