
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingObjectProps {
  color?: string;
  speed?: number;
  distort?: number;
  scale?: number;
}

const AnimatedBox = ({ color = "#f0c05a", speed = 1, distort = 0.3, scale = 1 }: FloatingObjectProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.4;
    
    // Add a subtle floating motion
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
  });
  
  return (
    <Box args={[1, 1, 1]} ref={meshRef} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        metalness={0.7}
        roughness={0.4}
      />
    </Box>
  );
};

const FloatingObject = (props: FloatingObjectProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <AnimatedBox {...props} />
    </Canvas>
  );
};

export default FloatingObject;
