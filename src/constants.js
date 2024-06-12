/**
 * Constants
 * Created By Graeme Morgan 2024
 */
import * as THREE from "three";

/**
 * Colors
 */
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
 * Camera Positions
 * 
 */
// Desktop Camera Positions
export const HOME_ORBITAL_TARGET = new THREE.Vector3(0, 0, 0);
export const HOME_CAMERA_POSITION = new THREE.Vector3(1, 4, 10);
// Mobile
export const HOME_ORBITAL_TARGET_MOBILE = new THREE.Vector3(0, -1, 0);
export const HOME_CAMERA_POSITION_MOBILE = new THREE.Vector3(1, 4, 12);
