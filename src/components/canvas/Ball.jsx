import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const onPointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const onPointerOut = () => {
    document.body.style.cursor = "auto";
  };

  return (
    <Float speed={3} rotationIntensity={3} floatIntensity={4}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 1.5]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;