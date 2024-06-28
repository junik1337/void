export interface links {
  label: string;
  route: string;
}

export const L_headerLinks: links[] = [
  {
    label: "Notre Entreprise",
    route: "/entreprise",
  },
  {
    label: "Notre science",
    route: "/science",
  },
  {
    label: "Votre Santé",
    route: "/santé",
  },
  {
    label: "Partenariat",
    route: "/partenariat",
  },
];

export const R_headerLinks: links[] = [
  {
    label: "Média",
    route: "/media",
  },
  {
    label: "Investisseurs",
    route: "/investisseurs",
  },
  {
    label: "Carrières",
    route: "/carrières",
  },
  {
    label: "Partenariat Paris 2024",
    route: "/partenariat_paris_2024",
  },
];

export const IconLists = [
  "/linkedin.svg",
  "/twitter.svg",
  "/instagram.svg",
  "/facebook.svg",
  "/tiktok.svg",
  "/youtube.svg",
  "/network.svg",
];

export const footerLinks: links[] = [
  {
    label: "Contact",
    route: "/Contact",
  },
  {
    label: "Mentions légales",
    route: "/Mentions_légales",
  },
  {
    label: "Vie Privée et Données Personnelles",
    route: "/Vie_Privée_et_Données_Personnelles",
  },
  {
    label: "Politique des cookies",
    route: "/Politique_des_cookies",
  },
  {
    label: "Entreprise Today",
    route: "/Entreprise_Today",
  },
  {
    label: "Nos publications",
    route: "/Nos_publications",
  },
  {
    label: "Plan du site",
    route: "/Plan_du_site",
  },
  {
    label: "Annuaire",
    route: "/Annuaire",
  },
  {
    label: "Accessibilité : conformité partielle",
    route: "/Accessibilité",
  },
  {
    label: "Code de Conduite",
    route: "/Code_de_Conduite",
  },
];

export const CardData = [
  {
    id: 1,
    title: "Le drapeau de la lutte contre les méningites",
    description:
      "Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo Curin, Davide Morana et plusieurs membres de la Meningitis Research Foundation / Confederation of Meningitis Organisations, le drapeau de la lutte contre les méningites vise à sensibiliser le public à une maladie qui reste encore, à ce jour, un problème majeur de santé publique à l’échelle mondiale.",
    picture: "/project1.png",
    PhotoPosition: "right",
  },
  {
    id: 2,
    title: "Les femmes au sein de Entreprise - Cristina",
    description:
      "Rencontrez Cristina Zamora, notre cheffe de projet pour les opérations de R&D en Amérique du Nord et l'une des nombreuses scientifiques inspirantes qui contribuent à renforcer la prochaine génération de femmes leaders dans le domaine de la santé et au-delà.",
    picture: "/project2.png",
    PhotoPosition: "left",
  },
  {
    id: 3,
    title: "200 jours avant les Jeux Paralympiques",
    description:
      "Si vous n'avez pas encore entendu parler du #DrapeauMéningites, regardez la vidéo de Vaskange et découvrez la signification de chaque couleur.",
    picture: "/project3.png",
    PhotoPosition: "right",
  },
];

export const CardData2 = [
  {
    id: 1,
    title: "Virus VS Bacteria",
    description:
      "Ils font partie de votre vie, mais les connaissez-vous vraiment ? Nos scientifiques vous expliquent les principales différences entre un virus et une bactérie.",
    picture: "/subject1.png",
    button: "Lire l'article",
  },
  {
    id: 2,
    title: "Le parcours B Corp de Notre Santé Grand Public",
    description:
      "En obtenant la certification B Corp pour Entreprise Santé Grand Public en Amérique du Nord, en Allemagne, en Italie et en Amérique latine, nous faisons partie d'une communauté mondiale qui transforme le monde des affaires en une force pour le bien.",
    picture: "/subject2.png",
    button: "En savoir plus",
  },
  {
    id: 3,
    title: "Maladie du sommeil : Ne laisser personne de côté",
    description:
      "Maladie tropicale négligée, la maladie du sommeil est généralement mortelle en l'absence de traitement. Les patients infectés par la variante la plus aiguë de la maladie, le T.b rhodesiense, n'ont malheureusement bénéficié que de peu d'innovations en matière de traitement. Mais l'espoir pointe à l'horizon. Pour ces patients, nous voyons le potentiel du premier traitement oral pour cette variante de la maladie, soutenant ainsi l'objectif d'élimination de la maladie du sommeil chez l’humain d'ici 2030.",
    picture: "/subject3.png",
    button: "En savoir plus",
  },
];
