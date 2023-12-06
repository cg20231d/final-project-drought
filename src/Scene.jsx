import {
  Environment,
  OrbitControls,
  PerspectiveCamera, Plane, Sky 
} from "@react-three/drei";
import { Suspense } from "react";
import { Words  } from "./Words";
import { Words2  } from "./Words2";
import { Words3  } from "./Words3";
import { Words4  } from "./Words4";
import { Track } from "./Track";
import { Track2 } from "./Track2";
import { Track3 } from "./Track3";
import { Track4 } from "./Track4";
import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import "./styles.css";
import './fetchAqi.js';



const Terrain = () => {
  const height = useLoader(THREE.TextureLoader, "elevation.png");
  const normals = useLoader(THREE.TextureLoader, "normals.png");
  const colors = useLoader(THREE.TextureLoader, "colors.png");

  return (
    <group>
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        args={[120, 120, 2024, 2024]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          map={colors}
          metalness={0.2}
          normalMap={normals}
          displacementMap={height}
        />
      </Plane>
    </group>
  );
};

export function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment
        files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
        background={"both"}
      />
     <OrbitControls target={[0, 0, 0]} enableZoom={true} enablePan={true} />
    <PerspectiveCamera
          position={[0, 0, 10]}
          lookAt={null}
          rotation={[0, 0, 0]}
        />
      <fog attach="fog" args={["white", 0, 80]} />
 
        <pointLight intensity={2} position={[-60, 3, 1]} />
        <Sky sunPosition={[7, 5, 1]} />

      <Track />
          <Track2 />
          <Track3 />
          <Track4 />
      <Words />
      <Words2 />
      <Words3 />
      <Words4 />
      <Terrain />
    </Suspense>
  );
}
