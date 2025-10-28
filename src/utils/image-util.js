export function getImageURL(name) {
  return new URL(`../assets/${name}.png`, import.meta.url).href;
}
