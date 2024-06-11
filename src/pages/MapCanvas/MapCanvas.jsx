import React from 'react';
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Map from '../../Map.jsx';
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Header from '../../Components/Header/Header.jsx';
import useIsMobile from '../../Components/useIsMobile/useIsMobile.jsx';

const MapCanvas = () => {
  // This state is to control the onClick state of the 'Reset View' Button in the Header.
  const [resetView, setResetView] = useState(false);
  // Check if the user is on a mobile device
  const isMobile = useIsMobile();
  return (
    <>
    <Header resetView={resetView} setResetView={setResetView} />
    <Canvas shadows>
      <Suspense fallback={null}>
        <Map
          resetView={resetView}
          setResetView={setResetView}
          isMobile={isMobile}
        />
      </Suspense>
    </Canvas>
    <Loader />
  </>
  );
};
export default MapCanvas;
