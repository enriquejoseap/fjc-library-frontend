import { WEBSITEROUTES } from "./routes";

export const HISTORY = {
  title: "Historia",
  items: [
    { title: "Biografa", url: WEBSITEROUTES.BIO },
    { title: "Currículum vitae", url: WEBSITEROUTES.CURRICULUM },
    { title: "Linea de tiempo", url: WEBSITEROUTES.TIMELINE },
  ],
};

export const PUBLICATIONS = {
  title: "Publicaciones",
  items: [
    { title: "Investigaciones", url: WEBSITEROUTES.INVESTIGATIONS },
    { title: "Prensa", url: WEBSITEROUTES.NEWSPAPER },
    { title: "Reflexiones", url: WEBSITEROUTES.REFLECTIONS },
  ],
};
