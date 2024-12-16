import PortfolioPreview from "../_components/PortfolioPreview";

export const projects = (lang) => [
    {
        title: "Portfolio",
        technologies: "Next.js",
        description:
            lang === "fr"
                ? "Il s'agit du portfolio que vous visitez à l'instant. J'ai choisi d'utiliser Next pour ce projet, une technologie que je maitrise. Locomotive Scroll m'a aidé pour le..."
                : "This is the portfolio you're currently visiting. I choose to use Next, a technologie I...",
        preview: <PortfolioPreview />,
    },
    {
        title: lang === "fr" ? "Descente Minière" : "Mine Dive",
        technologies: "Animate",
        description:
            lang === "fr"
                ? "Il s'agit du portfolio que vous visitez à l'instant. J'ai choisi d'utiliser Next pour ce projet, une technologie que je maitrise. Locomotive Scroll m'a aidé pour le..."
                : "This is the portfolio you're currently visiting. I choose to use Next, a technologie I...",
        img: "img/victor.jpg",
    },
    {
        title: lang === "fr" ? "Musée Dimensionnel" : "Dimentional Museum",
        technologies: "Unity",
        description:
            lang === "fr"
                ? "Il s'agit du portfolio que vous visitez à l'instant. J'ai choisi d'utiliser Next pour ce projet, une technologie que je maitrise. Locomotive Scroll m'a aidé pour le..."
                : "This is the portfolio you're currently visiting. I choose to use Next, a technologie I...",
        img: "img/victor.jpg",
    },
    {
        title: lang === "fr" ? "L'Ode d'Octavius" : "Octavius' Ode",
        technologies: "Unity",
        description:
            lang === "fr"
                ? "Il s'agit du portfolio que vous visitez à l'instant. J'ai choisi d'utiliser Next pour ce projet, une technologie que je maitrise. Locomotive Scroll m'a aidé pour le..."
                : "This is the portfolio you're currently visiting. I choose to use Next, a technologie I...",
        img: "img/victor.jpg",
    },
    {
        title:
            lang === "fr"
                ? <>La Lumière<nobr> </nobr>au Bout du Tunnel</>
                : "Light at the End of the Tunnel",
        technologies: "Unity",
        description:
            lang === "fr"
                ? "Il s'agit du portfolio que vous visitez à l'instant. J'ai choisi d'utiliser Next pour ce projet, une technologie que je maitrise. Locomotive Scroll m'a aidé pour le..."
                : "This is the portfolio you're currently visiting. I choose to use Next, a technologie I...",
        img: "img/victor.jpg",
    },
];
