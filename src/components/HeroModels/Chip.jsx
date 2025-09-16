import { useGLTF } from '@react-three/drei'
import { EffectComposer, SelectiveBloom} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import React, { useRef } from 'react'

export function Chip(props) {
  const { nodes, materials } = useGLTF('/models/microchip_prototype.glb')
  const mainChipRef = useRef()
  return (
    <group {...props} dispose={null}>
        <EffectComposer>
          <SelectiveBloom
            selection={mainChipRef}
            intensity={7}
            luminanceThreshold={0.7}
            luminanceSmoothing={0.1}
            blendFunction={BlendFunction.ADD}
          />
      </EffectComposer>
      <group scale={0.01}>
        <mesh ref={mainChipRef}geometry={nodes.chip001_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip002_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip003_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip004_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip005_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip006_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip007_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip008_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip009_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip010_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip011_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip012_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip013_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip014_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip015_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip016_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip017_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip018_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip019_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip020_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip021_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.chip_low_mat_0.geometry} material={materials.material} position={[0, 0, 6.791]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ground_low_ground_0.geometry} material={materials.ground} position={[0, -23.313, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/microchip_prototype.glb')
