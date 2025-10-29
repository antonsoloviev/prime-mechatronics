export function getImageURL(name) {
  return new URL(`../assets/${name}.png`, import.meta.url).href;
}

// http://localhost:5173/prime-mechatronics/src/assets/EN.png
// https://antonsoloviev.github.io/prime-mechatronics/assets/EN-CamCehN9.png

// export function getLocalesURL(lng, ns) {
//   return new URL(
//     `../../public/locales/{{${lng}}}/{{${ns}}}.json`,
//     import.meta.url
//   ).href;
// }

// import en from "../public/locales/en/translation.json";
//loadPath: "../prime-mechatronics/public/locales/{{lng}}/{{ns}}.json",
