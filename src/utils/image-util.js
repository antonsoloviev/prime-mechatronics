export function getImageURL(name) {
  return new URL(`../assets/${name}.png`, import.meta.url).href;
}

// http://localhost:5173/prime-mechatronics/src/assets/EN.png
// https://antonsoloviev.github.io/prime-mechatronics/assets/EN-CamCehN9.png
