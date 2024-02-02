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
    { title: "Investigaciones", url: WEBSITEROUTES.RESEARCH },
    { title: "Prensa", url: WEBSITEROUTES.NEWSPAPER },
    { title: "Reflexiones", url: WEBSITEROUTES.REFLECTIONS },
  ],
  icons: {
    light: "/icons/scroll-quill-light.svg",
    dark: "/icons/scroll-quill-dark.svg",
  },
};

export const NAVLINKS = {
  donations: {
    title: "Donaciones",
    url: WEBSITEROUTES.DONATIONS,
    icons: {
      light: "/icons/transfuse-light.svg",
      dark: "/icons/transfuse-dark.svg",
    },
  },
  librarian: {
    title: "Bibliotecario",
    url: WEBSITEROUTES.LIBRARIAN,
    icons: {
      light: "/icons/brain-light.svg",
      dark: "/icons/brain-dark.svg",
    },
  },
  admin: {
    title: "Ir al Panel Administrativo",
    url: WEBSITEROUTES.ADMIN.DASHBOARD,
    icons: {
      light: "/icons/cog-light.svg",
      dark: "/icons/cog-dark.svg",
    },
  },
};

export const LIBRARIAN = {
  title: "Bibliotecario",
  url: WEBSITEROUTES.LIBRARIAN,
  icons: {
    light: "/icons/brain-light.svg",
    dark: "/icons/brain-dark.svg",
  },
};
