import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ThreeDModel() {
  const { scene } = useGLTF('/models/scene.gltf');

  // Adjust scene properties
  scene.position.set(10, -4, -10.6);
  scene.rotation.set(0, Math.PI / 2, 0);
  scene.scale.set(1.5, 1.5, 1.5);

  return (
    <div className="flex justify-center items-center h-screen w-screen  ">
      <Canvas
        shadows
        camera={{ position: [10, 3, -8], fov: 60 }}
        className="w-full h-full"
      >
        {/* Lighting Setup */}
        {/* Soft ambient light */}
        <ambientLight intensity={0.9} color="#ffffff" />

        {/* Cool blue directional light */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={0.8}
          color="#89CFF0"
          castShadow
        />

        {/* Warm orange point light for highlights */}
        <pointLight
          position={[-5, 5, -5]}
          intensity={0.6}
          color="#FFA07A"
        />

        {/* Accent magenta spot light */}
        <spotLight
          position={[10, 10, 10]}
          intensity={0.9}
          angle={Math.PI / 6}
          penumbra={0.5}
          color="#FF69B4"
          castShadow
        />

        {/* Bright spotlight from above */}
        <spotLight
          position={[0, 15, 0]} // Directly above the model
          intensity={2}
          angle={Math.PI / 4}
          penumbra={0.3}
          color="#ffffff" // Neutral white light
          castShadow
        />

        {/* 3D Model */}
        <primitive object={scene} castShadow receiveShadow />

        {/* Camera Controls */}
        <OrbitControls
           enableZoom={false}  // Disable zooming
          enablePan
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          
        />
      </Canvas>
    </div>
  );
}

export default ThreeDModel;
