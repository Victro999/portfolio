export const projects = (lang) => [
    {
        id: 0,
        title: lang === "fr" ? "Musée Dimensionnel" : "Dimensional Museum",
        technologies: "Unity, VR",
        description:
            lang === "fr"
                ? "Une expérience de musée en réalité virtuelle, inspirée du Museum of Other Realities. Les visiteurs explorent des portails pour découvrir différentes expositions immersives."
                : "A virtual reality museum experience inspired by the Museum of Other Realities. Visitors explore portals to discover various immersive exhibitions.",
        references: (
            <>
                {lang === "fr" ? "Modélisation par " : "Modeling by "}
                <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/raphael-tremblay-3d"
                    target="_blank"
                    rel="noreferrer">
                    Raphaël Tremblay
                </a>{" "}
                {lang === "fr" ? "et " : "and "}
                <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/christian-allan-reolo/"
                    target="_blank"
                    rel="noreferrer">
                    Christian Allan Reolo
                </a>
            </>
        ),
        img: "img/stencil-portals.gif",
    },
    {
        id: 1,
        title: lang === "fr" ? "L'Ode d'Octavius" : "Octavius' Ode",
        technologies: "Unity",
        description:
            lang === "fr"
                ? "Un simple RPG mêlant puzzles, aventure et combats. Inspiré par des jeux comme Undertale et OneShot."
                : "A simple RPG blending puzzles, adventure, and combat. Inspired by games like Undertale and OneShot.",
        img: "img/octavius.gif",
    },
    {
        id: 2,
        title: "Slow Mallow",
        technologies: "Unity",
        description:
            lang === "fr"
                ? "Un platformer dans un univers de bonbons où un slime se liquéfie pour franchir des grilles et se camoufler."
                : "A platformer in a candy world where a slime melts to pass through grates and hide.",
        references: (
            <>
                {lang === "fr"
                    ? "En collaboration avec "
                    : "In collaboration with "}
                <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/sonika-lamont/"
                    target="_blank"
                    rel="noreferrer">
                    Sonika Lamont
                </a>
            </>
        ),
        img: "img/slow-mallow.gif",
    },
    {
        id: 3,
        title: lang === "fr" ? "Suspendu" : "Suspended",
        technologies: "Unity, HDRP",
        description:
            lang === "fr"
                ? "Une exploration atmosphérique en vue de côté, inspirée de Inside et Limbo, où un personnage articulé de joints physiques traverse un monde de solitude."
                : "An atmospheric side-view exploration game inspired by Inside and Limbo, where a character built from physical joints ventures through a world of solitude.",
        img: "img/suspendu.gif",
    },
    {
        id: 4,
        title: "Dynamic Portals",
        technologies: "Unity, Shader Graph",
        description:
            lang === "fr"
                ? "Une démonstration de portails dynamiques utilisant des shaders sur mesure, permettant des transitions fluides entre différents endroits."
                : "A showcase of dynamic portals using custom shaders, enabling seamless transitions between different places.",
        references: (
            <>
                {lang === "fr" ? "Disponible sur " : "Available on "}
                <a
                    className="font-bold"
                    href="https://assetstore.unity.com/packages/tools/physics/dynamic-portals-235818"
                    target="_blank"
                    rel="noreferrer">
                    Unity Asset Store
                </a>
            </>
        ),
        img: "img/portals.gif",
    },
];
