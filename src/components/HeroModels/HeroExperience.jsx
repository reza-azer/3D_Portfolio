import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import { Chip } from "./Chip";
import HeroLights from "./HeroLights";
const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'}); // Replace with actual logic to determine if the device is a tablet
    return (
        <Canvas camera={{ position: [0, 3, 2], fov: 45 }}>
            <OrbitControls
            enablePan={!isTablet}
            enableZoom={!isTablet}
            maxDistance={15}
            minDistance={2}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 3}
            />
            <HeroLights />

            <group
                scale={isMobile ? 0.7 : isTablet ? 0.9 : 1}
                position={[0, 1, 0]}
                rotation={[0, 90, 0]}
            >
                
                <Chip />
            </group>
        </Canvas>
    );
}

export default HeroExperience;