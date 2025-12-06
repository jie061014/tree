import { Vector3 } from 'three';

// Trump-style Luxury Palette
export const COLORS = {
  EMERALD_DEEP: "#004225",
  EMERALD_LIGHT: "#006B3C",
  GOLD_HIGH: "#FFD700",
  GOLD_DARK: "#DAA520",
  SILVER: "#E5E4E2",
  RED_VELVET: "#800020",
  WARM_LIGHT: "#FFF8E7",
  ICE_BLUE: "#A5F2F3", // New diamond/ice color
  PURE_WHITE: "#FFFFFF"
};

export const CONFIG = {
  TREE_HEIGHT: 12,
  TREE_RADIUS: 4.5,
  PARTICLE_COUNT: 4500, // Foliage
  ORNAMENT_COUNT: 150,
  PHOTO_COUNT: 24,
  CAMERA_POS: new Vector3(0, 4, 20),
  ANIMATION_SPEED: 2.5,
};

export const TEXTURE_URLS = [
  "https://picsum.photos/id/1011/300/350",
  "https://picsum.photos/id/1015/300/350",
  "https://picsum.photos/id/103/300/350",
  "https://picsum.photos/id/106/300/350",
  "https://picsum.photos/id/129/300/350",
  "https://picsum.photos/id/145/300/350",
];
