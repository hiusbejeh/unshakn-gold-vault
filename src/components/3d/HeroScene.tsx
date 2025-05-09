
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  
  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} position={[0, 0, 0]} scale={2.2}>
      <MeshDistortMaterial
        color="#f0c05a"
        attach="material"
        distort={0.4}
        speed={2}
        metalness={0.7}
        roughness={0.4}
      />
    </Sphere>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <AnimatedSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
