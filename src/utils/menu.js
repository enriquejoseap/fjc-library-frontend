import { WEBSITEROUTES } from "../routes/routes";

export const HISTORY = {
  title: "Historia",
  items: [
    { title: "Biografía", url: WEBSITEROUTES.BIO },
    { title: "Currículum vitae", url: WEBSITEROUTES.CURRICULUM },
    { title: "Linea de tiempo", url: WEBSITEROUTES.TIMELINE },
  ],
  icons: {
    light: "/icons/bookmarklet-light.svg",
    dark: "/icons/bookmarklet-dark.svg",
  },
};

export const PUBLICATIONS = {
  title: "Publicaciones",
  items: [
    { title: "Investigaciones", url: WEBSITEROUTES.INVESTIGATIONS },
    { title: "Prensa", url: WEBSITEROUTES.NEWSPAPER },
    { title: "Reflexiones", url: WEBSITEROUTES.REFLECTIONS },
  ],
  icons: {
    light: "/icons/scroll-quill-light.svg",
    dark: "/icons/scroll-quill-dark.svg",
  },
};
