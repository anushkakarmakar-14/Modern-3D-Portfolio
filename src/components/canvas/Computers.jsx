import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  console.log("Computer model loaded:", computer);

  return (
    <group>
      {/* Basic lighting that always works */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={[0, -1, 0]} // Simplified position
        rotation={[0, 0, 0]} // No rotation
      />
    </group>
  );
};

// Simple fallback component
const FallbackComputer = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[2.5, 0.1, 1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modelError, setModelError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent'
      }}
      camera={{
        position: [0, 0, 6],
        fov: 45,
        near: 0.1,
        far: 100
      }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['transparent']} />
      
      <Suspense fallback={<CanvasLoader />}>
        {modelError ? (
          <FallbackComputer />
        ) : (
          <Computers isMobile={isMobile} />
        )}
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;