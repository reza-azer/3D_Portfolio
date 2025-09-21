import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import { PC } from "./PC";
const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'}); // Replace with actual logic to determine if the device is a tablet
    return (
        <Canvas camera={{ position: [7, 2, 10], fov: 30 }}>
            <OrbitControls
            enablePan={!isTablet}
            enableZoom={!isTablet}
            maxDistance={15}
            minDistance={2}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            />
            <HeroLights />

            <group
                scale={isMobile ? 0.7 : isTablet ? 0.9 : 1}
                position={[0, -2, -2]}
                rotation={[0, 0, 0]}
            >
                
            <PC />
            </group>
        </Canvas>
    );
}

export default HeroExperience;