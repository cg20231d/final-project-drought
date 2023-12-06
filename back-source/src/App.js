import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Sky } from "@react-three/drei";
import { SceneContainer } from "./island-type1/SceneContainer";

import "./styles.css";

const Terrain = () => {
  const height = useLoader(THREE.TextureLoader, "elevation.png");
  const normals = useLoader(THREE.TextureLoader, "normals.png");
  const colors = useLoader(THREE.TextureLoader, "colors.png");
  const mesh1 = new THREE.Mesh(
    new THREE.PlaneGeometry(250, 250, 2536, 2536),
    new THREE.MeshStandardMaterial({
      color: "white",
      map: colors,
      metalness: 0.2,
      normalMap: normals,
      displacementMap: height,
    })
  );

  mesh1.rotation.set(-Math.PI / 2, 0, 0);
  mesh1.position.x = -47; // Atur posisi x
  mesh1.position.z = 18;


  return (
    <group>
      <primitive object={mesh1} />
      <Suspense fallback={null}>
        <SceneContainer mesh={mesh1} />
      </Suspense>
    </group>
  );
};

const App = () => {
  return (
    <>
      <Canvas>
        <fog attach="fog" args={["white", 0, 505]} />
        <OrbitControls autoRotate />
        <pointLight intensity={1.5} position={[30, 5, 1]} />
        <Sky sunPosition={[10, 7, 3]} />
        <Terrain />
      </Canvas>
    </>
  );
};

export default App;
