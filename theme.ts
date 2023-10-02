import { buildLegacyTheme } from "sanity";

const props = {
  "colour-beer": "#fbb117",
  "colour-black": "#1a1a1a",
  "colour-buddha-gold": "#ca9300",
  "colour-chilli-pepper": "#c11b17",
  "colour-sea-green": "#2e8b57",
  "colour-supernova": "#ffcc00",
  "colour-vermillion": "#ff4c17",
  "colour-white": "#fff",
};

export const blogCampTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["colour-black"],
  "--white": props["colour-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["colour-black"],
  "--component-text-color": props["colour-white"],

  /* Brand */
  "--brand-primary": props["colour-supernova"],

  /* Default button */
  "--default-button-color": "#666",
  "--default-button-primary-color": props["colour-supernova"],
  "--default-button-success-color": props["colour-sea-green"],
  "--default-button-warning-color": props["colour-beer"],
  "--default-button-danger-color": props["colour-chilli-pepper"],

  /* States */
  "--state-info-color": props["colour-supernova"],
  "--state-success-color": props["colour-sea-green"],
  "--state-warning-color": props["colour-beer"],
  "--state-danger-color": props["colour-chilli-pepper"],

  /* Navbar */
  "--main-navigation-color": props["colour-black"],
  "--main-navigation-color--inverted": props["colour-white"],

  "--focus-color": props["colour-supernova"],
});