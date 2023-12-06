import './fetchYogya.js';
import { useEffect, useState } from 'react';
import { Float, Text3D } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

export function Words3() {
  const [yogyakartaAqi, setYogyakartaAqi] = useState(null);

  useEffect(() => {
    // Load fetchAqi.js dynamically
    const script = document.createElement('script');
    script.src = './fetchAqi.js'; // Use the relative path to fetchAqi.js
    script.async = true;
    script.onload = () => {
      // Once the script is loaded, yogyakartaAqi will be available
      setYogyakartaAqi(window.yogyakartaAqi);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Run this effect only once

  return (
    <>
      {yogyakartaAqi !== null && (
        <>
          <Float position={[8, 2, 12]} rotation={[0, -0.2, -0.05]} rotationIntensity={0.35} floatIntensity={0.5}>
            <Text3D
              font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
              size={0.575}
              height={0.065}
              curveSegments={12}
            >
              {yogyakartaAqi}
            </Text3D>
          </Float>

          <Float position={[8, 3, 12]} rotation={[0, -0.35, -0.05]} rotationIntensity={0.35} floatIntensity={0.5}>
            <Text3D
              font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
              size={0.575}
              height={0.065}
              curveSegments={12}
            >
              AQI in Yogyakarta
            </Text3D>
          </Float>
        </>
      )}
    </>
  );
}
