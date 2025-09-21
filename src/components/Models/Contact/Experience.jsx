import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Office } from "./Office"


const Experience = () => {
    return (
        <Canvas shadows camera={{ position: [ 10, -1, 0 ], fov: 100 }}>

            <ambientLight position={[]} intensity={0.4} color="#b3daffff"/>
            
            <directionalLight
                position={[10, 10, 0]}
                castShadow
                intensity={1}
                color="#00adfeff"
            />

            <OrbitControls
            maxDistance={4}
            minDistance={1}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 1.75}
            minAzimuthAngle={Math.PI / 7}
            maxAzimuthAngle={Math.PI / 1}
            enablePan={false}
            />

            <group
            position={[0, -2, 0]}
            rotation={[0, 24, 0]}
            >
                <Office />
            </group>
        </Canvas>
    )
}

export default Experience