/**
 * Main.jsx
 * This is the main Three.js component.
 * Loads main mountain model and texture.
 * Handles Label Clicks.
 * Debugging with Leva.
 *
 * Some code is commented for debugging purposes. Do not delete.
 */
import {
  OrbitControls,
  useMatcapTexture,
  useTexture,
  useGLTF,
  PerspectiveCamera,
  Html,
  Cloud,
  Sky,
  Box,
  Sphere,
  Clouds,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { useRef } from "react";
import styles from "./Map.module.css";
import { useControls } from "leva";
import * as THREE from "three";
import React from "react";
import {
  CLOUD_COLOR,
  HOME_CAMERA_POSITION,
  HOME_CAMERA_POSITION_MOBILE,
  HOME_LABEL_POSITION,
  HOME_ORBITAL_TARGET,
  HOME_ORBITAL_TARGET_MOBILE,
  BLUE_COLOR,
  BLACK_COLOR,
  GREEN_COLOR,
  RED_COLOR,
  PURPLE_COLOR,
  YELLOW_COLOR,
  ORANGE_COLOR,
  SILVER_COLOR
} from "./constants.js";
import { XCircle } from "react-feather";

const Map = ({ resetView, setResetView, isMobile }) => {

  // Troll Mountain Imports
  const mountainMain = useGLTF("/models/mountainMain.glb")
  const mainTexture = useTexture("/models/trollMountainMain.jpg")


  // Default Camera and Controls Reference
  const cameraRef = useRef();
  const controlsRef = useRef();
  const sphereRef = useRef();
  const targetSphereRef = useRef();
  const liftRef = useRef();

  // State
  const [liftPopup, setLiftPop] = React.useState(false);
  const [labelName, setLabelName] = React.useState("");
  const [getDescription, setDescription] = React.useState("");


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


  // On Lift and Run Click
  const onLiftClick = (name, description) => {
    setLiftPop(true)
    setLabelName(name)
    setDescription(description)
  }

  // Add a cursor to clickable meshes
  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'default';
  };




  return (
    <>
      {/* Performance Monitoring */}
      {/* <Perf position="top-left" /> */}

      {/* Main Camera */}
      <PerspectiveCamera
        makeDefault // Make this the default camera
        position={
          !isMobile ? HOME_CAMERA_POSITION : HOME_CAMERA_POSITION_MOBILE} // Turn this on for set position
        fov={55} // Field of view
        near={0.1} // Near clipping plane
        far={400} // Far clipping plane
        ref={cameraRef} // Reference to the camera
      />

      {/* Main Controls */}
      <OrbitControls
        makeDefault
        target={!isMobile ? HOME_ORBITAL_TARGET : HOME_ORBITAL_TARGET_MOBILE} // Turn this on for set position
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        // North and south rotation limits
        minPolarAngle={Math.PI / 3.3}
        maxPolarAngle={Math.PI / 2.5}
        // East and West rotation limits
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 6}
        ref={controlsRef}
        minDistance={30}
        maxDistance={isMobile ? 60 : 40}
      />



      {/* Main Mountain */}
      <mesh
        geometry={mountainMain.nodes.mountainMain.geometry}
        scale={0.05}
        position={[0, 0, 0]}>
        <meshBasicMaterial map={mainTexture} map-flipY="true" />
      </mesh>
      {/* Cliffs */}
      <mesh
        geometry={mountainMain.nodes.cliffs.geometry}
        scale={0.05}
        position={[0, 0, 0]}>
        <meshBasicMaterial map={mainTexture} map-flipY="true" />
      </mesh>
      {/* Large Plane */}
      <mesh
        geometry={mountainMain.nodes.largePlane.geometry}
        scale={0.05}
        position={[0, 0, 0]}>
        <meshBasicMaterial map={mainTexture} map-flipY="true" />
      </mesh>
      {/* Forest */}
      {mountainMain.nodes.forest.children.slice(0, 62).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          position={[0, 0, 0]}>
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}
      {/* Lodge */}
      {mountainMain.nodes.lodgeLarge.children.slice(0, 4).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          position={[0, 0, 0]}>
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}
      {/* Lower Cabin */}
      {mountainMain.nodes.lodgeSmall.children.slice(0, 4).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          position={[0, 0, 0]}>
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}
      {/* Road */}
      {mountainMain.nodes.road.children.slice(0, 2).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          position={[0, 0, 0]}>
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}
      {/* Road Sign */}
      <mesh
        geometry={mountainMain.nodes.roadSign.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Driving Distances", "30km to Wells, 167km to Williams Lake") }}
      >
        <meshBasicMaterial map={mainTexture} map-flipY="true" />
      </mesh>
      {/* Snowshoe Sign */}
      <mesh
        geometry={mountainMain.nodes.horseshoeSign.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Driving Distances", "48km to Quesnel, 151km to Prince George") }}
      >
        <meshBasicMaterial map={mainTexture} map-flipY="true" />
      </mesh>
      {/* Peak Sign */}
      <mesh
        geometry={mountainMain.nodes.PeakSign.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Troll Mountain Peak", "1645m Elevation, 6km Longest Run") }}
      >
        <meshBasicMaterial map={mainTexture} map-flipY="true" />
      </mesh>









      {/* Runs */}
      {/* Horseshoe Trails */}
      <mesh
        geometry={mountainMain.nodes.horseshoeTrails.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={ORANGE_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.horseshoeWideClickable.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Snowshoe Trails") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      {/* Astrias Alley */}
      <mesh
        geometry={mountainMain.nodes.geo_astriasAlley.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={GREEN_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_astriasAlley002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Astria's Alley") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      {/* Bambi */}
      <mesh
        geometry={mountainMain.nodes.geo_bambi.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={GREEN_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_bambi002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Bambi") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
         {/* Big Dipper */}
         <mesh
        geometry={mountainMain.nodes.geo_bigDipper.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLUE_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_bigDipper002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Big Dipper") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
       {/* Bunny Hill */}
       <mesh
        geometry={mountainMain.nodes.geo_bunnyHill.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={GREEN_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_bunnyHill002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Bunny Hill") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      {/* Cinderella */}
      <mesh
        geometry={mountainMain.nodes.geo_cinderella.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLUE_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_cinderella002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Cinderella") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
         {/* Clear Cut */}
         <mesh
        geometry={mountainMain.nodes.geo_clearCut.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLACK_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_clearCut002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Clear Cut") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

         {/* Goofy */}
         <mesh
        geometry={mountainMain.nodes.geo_goofy.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLACK_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_goofy002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Goofy") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

          {/* Overlander */}
          <mesh
        geometry={mountainMain.nodes.geo_overlander.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLUE_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_overlander002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Overlander") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

          {/* Racers Edge */}
          <mesh
        geometry={mountainMain.nodes.geo_racersEdge.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLACK_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_racersEdge002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Racers Edge") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

          {/* Troll Face */}
          <mesh
        geometry={mountainMain.nodes.geo_trollFace.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLUE_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_trollFace002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Troll Face") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

          {/* Upper Viking */}
          <mesh
        geometry={mountainMain.nodes.geo_upperViking.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLUE_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_upperViking002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("UpperViking") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

         {/* Wildcat */}
         <mesh
        geometry={mountainMain.nodes.geo_wildcat.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={BLACK_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.geo_wildcat002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Wildcat") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>

           {/* Snow White */}
           <mesh
        geometry={mountainMain.nodes.snowWhite.geometry}
        scale={0.05}
        position={[0, 0, 0]}
      >
        <meshBasicMaterial color={GREEN_COLOR} />
      </mesh>
      <mesh
        geometry={mountainMain.nodes.snowWhite002.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Snow White") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>









      {/* Lifts */}
      {/* Red Lift */}
      {mountainMain.nodes.red.children.slice(0, 7).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          color={RED_COLOR}
          className={styles.lift}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial color={RED_COLOR} />
        </mesh>
      ))}
      {/* Red Clickable */}
      <mesh
        geometry={mountainMain.nodes.redLiftClickable.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Red Lift", "Beginner to Advanced") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      {/* Red Cabin */}
      {mountainMain.nodes.redCabin.children.slice(0, 5).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          color={RED_COLOR}
          className={styles.lift}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}

      {/* Yellow Lift */}
      <mesh
        geometry={mountainMain.nodes.yellow.geometry}
        scale={0.05}
        position={[0, 0, 0]}>
        <meshBasicMaterial color={YELLOW_COLOR} />
      </mesh>
      {/* Yellow Clickable */}
      <mesh
        geometry={mountainMain.nodes.yellowWideClickable.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Yellow Lift", "Beginner") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      {/* Yellow Cabin */}
      {mountainMain.nodes.yellowCabin.children.slice(0, 4).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          color={RED_COLOR}
          className={styles.lift}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}
      {/* Silver Lift */}
      <mesh
        geometry={mountainMain.nodes.silver.geometry}
        scale={0.05}
        position={[0, 0, 0]}>
        <meshBasicMaterial color={SILVER_COLOR} />
      </mesh>
      {/* Yellow Clickable */}
      <mesh
        geometry={mountainMain.nodes.silverWideClickable.geometry}
        scale={0.05}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => { onLiftClick("Silver Lift", "Intermediate to Advanced") }}
      >
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
      {/* Silver Cabin */}
      {mountainMain.nodes.silverCabin.children.slice(0, 4).map((child, index) => (
        <mesh
          key={index}
          geometry={child.geometry}
          scale={0.05}
          color={RED_COLOR}
          className={styles.lift}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial map={mainTexture} map-flipY="true" />
        </mesh>
      ))}





      {liftPopup && <Html position={[0, 0, 0]}>
        <div className={styles.infoPopup} onClick={() => setLiftPop(!liftPopup)}>
          <div className={styles.close}><XCircle /></div>
          <h2>{labelName}</h2>
          <p>{getDescription}</p>
        </div>
      </Html>}









      {/* Sky settings */}
      <Sky sunPosition={[10, 5, 10]} />
    </>
  );
};

export default Map;
