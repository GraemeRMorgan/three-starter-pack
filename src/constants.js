/**
 * Constants
 * Created By Graeme Morgan 2024
 */
import * as THREE from "three";

/**
 * Colors
 */
// Run and Lift Colors
export const GREEN_COLOR = "hsla(126, 73%, 33%, 1)";
export const BLUE_COLOR = "hsla(227, 100%, 50%, 1)";
export const BLACK_COLOR = "hsla(227, 100%, 0%, 1)";
export const RED_COLOR = "hsla(6, 100%, 40%, 1)";
export const YELLOW_COLOR = "hsla(42, 100%, 37%, 1)";
export const ORANGE_COLOR ="hsla(30, 100%, 43%, 1)";
export const WHITE_COLOR = "hsla(0, 100%, 100%, 1)"
export const PURPLE_COLOR = "hsla(298, 92%, 48%, 1)"
export const SILVER_COLOR = "hsla(215, 11%, 37%, 1)"

// Cloud Colors
export const CLOUD_COLOR = "hsla(183, 100%, 92%, 1)";

// Canvas Background Color
export const BACKGROUND_COLOR = "hsla(0, 0%, 89%, 1)";

/**
 * Positions and Scales
 */

// Scale Values
export const SCALE_VALUE = 0.004;

// Model Position
export const MOUNTAIN_LOCAL_POSITION = [0, 0, 0];

// Helper Object Scales
export const SCALE_HELPER = 0.08;

// Label Positions
//Home
export const HOME_LABEL_POSITION = [100, 5, 220];
export const MORRISEY_LABEL_POSITION = [156, 216, 596];
export const TOD_LABEL_POSITION = [-420, 400, -130];
export const SUNDANCE_LABEL_POSITION = [150, 250, -130];
export const ORIENT_LABEL_POSITION = [350, 150, 10];

/**
 * Camera Positions
 * 
 */

// Desktop Camera and Orbital Target Positions
// Home
// export const HOME_ORBITAL_TARGET = new THREE.Vector3(0.6, 0.3, 0.7);
// export const HOME_CAMERA_POSITION = new THREE.Vector3(4.96, -0.34, 2.06);
// Morrisey
export const MORRISEY_ORBITAL_TARGET = new THREE.Vector3(0.2, 0.1, 2);
export const MORRISEY_CAMERA_POSITION = new THREE.Vector3(0.5, 1, 0);
// MT Tod
export const TOD_ORBITAL_TARGET = new THREE.Vector3(-1.3, 0.3, -0.2);
export const TOD_CAMERA_POSITION = new THREE.Vector3(-1, -3, 0.14);
// Sundance
export const SUNDANCE_ORBITAL_TARGET = new THREE.Vector3(0.6, 0.4, 0);
export const SUNDANCE_CAMERA_POSITION = new THREE.Vector3(0.58, -1.35, 0.3);
// Orient
export const ORIENT_ORBITAL_TARGET = new THREE.Vector3(1.4, 0.2, 0.6);
export const ORIENT_CAMERA_POSITION = new THREE.Vector3(0.86, 0.14, 1.58);

// Mobile Camera and Orbital Target Positions
// Home
// export const HOME_ORBITAL_TARGET_MOBILE = new THREE.Vector3(1, 0.5, 1);
// export const HOME_CAMERA_POSITION_MOBILE = new THREE.Vector3(6, 3, 3);
// Morrisey
export const MORRISEY_ORBITAL_TARGET_MOBILE = new THREE.Vector3(0.5, 0.1, 2);
export const MORRISEY_CAMERA_POSITION_MOBILE = new THREE.Vector3(2, 1, 0);
// MT Tod
export const TOD_ORBITAL_TARGET_MOBILE = new THREE.Vector3(-1.3, 0.5, -0.2);
export const TOD_CAMERA_POSITION_MOBILE = new THREE.Vector3(-1, -4, 0.14);
// Sundance
export const SUNDANCE_ORBITAL_TARGET_MOBILE = new THREE.Vector3(0.6, 0.4, 0);
export const SUNDANCE_CAMERA_POSITION_MOBILE = new THREE.Vector3(0.58, -2, 0.3);
// Orient
export const ORIENT_ORBITAL_TARGET_MOBILE = new THREE.Vector3(1.4, 0.3, 0.6);
export const ORIENT_CAMERA_POSITION_MOBILE = new THREE.Vector3(1.2, 2, 1.58);

// Troll Camera Positions
export const HOME_ORBITAL_TARGET = new THREE.Vector3(0, 1.3, 0);
export const HOME_CAMERA_POSITION = new THREE.Vector3(-20, 10, 40);
// Mobile
export const HOME_ORBITAL_TARGET_MOBILE = new THREE.Vector3(0, 1.8, 0);
export const HOME_CAMERA_POSITION_MOBILE = new THREE.Vector3(0, 20, 50);
