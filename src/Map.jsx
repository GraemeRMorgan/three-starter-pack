import {
  OrbitControls,
  useTexture,
  useGLTF,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import React from "react";
import {
  HOME_CAMERA_POSITION,
  HOME_CAMERA_POSITION_MOBILE,
  HOME_ORBITAL_TARGET,
  HOME_ORBITAL_TARGET_MOBILE,
} from "./constants.js";

// Texture Tiling Function
const applyTextureSettings = (texture, repeatX, repeatY) => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
};


const Map = ({ resetView, setResetView, isMobile }) => {

  //HDRI Texture 
  const hdriTexture = useTexture("/hdri/dikhololo_night_2k.png")

  // Orb Texture
  const model = useGLTF("/models/three-starter-scene.glb")
  const colorMap = useTexture("/texture/space-ship-monitor-bl/space-ship-monitor_albedo.png")
  const normalMap = useTexture("/texture/space-ship-monitor-bl/space-ship-monitor_normal-ogl.png")
  const aoMap = useTexture("/texture/space-ship-monitor-bl/space-ship-monitor_ao.png")
  const heightMap = useTexture("/texture/space-ship-monitor-bl/space-ship-monitor_height.png")
  const roughnessMap = useTexture("/texture/space-ship-monitor-bl/space-ship-monitor_roughness.png")
  const metalnessMap = useTexture("/texture/space-ship-monitor-bl/space-ship-monitor_metallic.png")

  // Tile Textures
  applyTextureSettings(colorMap, 4, 4);
  applyTextureSettings(normalMap, 4, 4);
  applyTextureSettings(aoMap, 4, 4);
  applyTextureSettings(heightMap, 4, 4);
  applyTextureSettings(roughnessMap, 4, 4);
  applyTextureSettings(metalnessMap, 4, 4);


  // Default Camera and Controls Reference
  const cameraRef = useRef();
  const controlsRef = useRef();

  // Label onClick Handler
  const handleLabelClick = (orbitalTarget, cameraPosition) => {
    controlsRef.current.target.copy(orbitalTarget);
    controlsRef.current.update();
    cameraRef.current.position.set(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z
    );
  };


  // Check if the resetView === true
  if (resetView === true) {
    !isMobile
      ? handleLabelClick(HOME_ORBITAL_TARGET, HOME_CAMERA_POSITION)
      : handleLabelClick(
        HOME_ORBITAL_TARGET_MOBILE,
        HOME_CAMERA_POSITION_MOBILE
      );
    setResetView(false);
  }

  return (
    <>
      {/* Performance Monitoring */}
      {/* <Perf position="top-left" /> */}

      {/* Main Camera */}
      <PerspectiveCamera
        makeDefault // Make this the default camera
        position={
          !isMobile ? HOME_CAMERA_POSITION : HOME_CAMERA_POSITION_MOBILE}
        fov={55} // Field of view
        near={0.1} // Near clipping plane
        far={400} // Far clipping plane
        ref={cameraRef} // Reference to the camera
      />

      {/* Main Controls */}
      <OrbitControls
        makeDefault
        target={!isMobile ? HOME_ORBITAL_TARGET : HOME_ORBITAL_TARGET_MOBILE}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        ref={controlsRef}
      // North and south rotation limits
      // minPolarAngle={Math.PI / 3.3}
      maxPolarAngle={Math.PI / 2.2}
      // East and West rotation limits
      // minAzimuthAngle={-Math.PI / 3}
      // maxAzimuthAngle={Math.PI / 6}
      // minDistance={30}
      // maxDistance={isMobile ? 60 : 40}
      />

      <ambientLight intensity={2} position={[0, 10, 0]} />

      <Environment
        ground={{ height: -5, radius: 40, scale: 20 }}
        files="/hdri/dikhololo_night_2k.exr"
        visible={false}
      />


      {/* Main Mountain */}
      <mesh
        geometry={model.nodes.Sphere.geometry}

        position={[0, 0, 0]}>

        <meshStandardMaterial
        smoothShading
          map={colorMap}
          normalMap={normalMap}
          aoMap={aoMap}
          // NOTE: Displacement should have a higher poly model
          // displacementMap={heightMap}
          // displacementScale={0.01} 
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap}
          metalness={0.1}
        />
      </mesh>

      {/* Sky settings */}
      {/* <Sky sunPosition={[10, 5, 10]} /> */}
    </>
  );
};

export default Map;
