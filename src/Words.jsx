import './fetchAqi.js';
import { useEffect, useState } from 'react';
import { Float, Text3D } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

export function Words() {
  const [surabayaAqi, setSurabayaAqi] = useState(null);

  useEffect(() => {
    // Load fetchAqi.js dynamically
    const script = document.createElement('script');
    script.src = './fetchAqi.js'; // Use the relative path to fetchAqi.js
    script.async = true;
    script.onload = () => {
      // Once the script is loaded, surabayaAqi will be available
      setSurabayaAqi(window.surabayaAqi);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Run this effect only once

  return (
    <>
      {surabayaAqi !== null && (
        <>
            <Float position={[23.75, 1, -4.75]} rotation={[0, -0.2, -0.05]} rotationIntensity={0.35} floatIntensity={0.5}>
            <Text3D
              font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
              size={0.575}
              height={0.065}
              curveSegments={12}
              color="black"
            >
              {surabayaAqi}
            </Text3D>
          </Float>

            <Float position={[23.5, 1.7, -5]} rotation={[0, -0.35, -0.05]} rotationIntensity={0.35} floatIntensity={0.5}>
            <Text3D
              font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
              size={0.575}
              height={0.065}
              curveSegments={12}
              color="blue"
            >
              AQI in Surabaya
            </Text3D>
          </Float>
        </>
      )}
    </>
  );
}
