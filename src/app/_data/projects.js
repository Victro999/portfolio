export const projects = (lang) => [
    {
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
                    rel="noopener noreferrer">
                    Raphaël Tremblay
                </a>{" "}
                {lang === "fr" ? "et " : "and "}
                <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/christian-allan-reolo/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Christian Allan Reolo
                </a>
            </>
        ),
        img: "img/stencil-portals.gif",
    },
    {
        title: lang === "fr" ? "L'Ode d'Octavius" : "Octavius' Ode",
        technologies: "Unity",
        description:
            lang === "fr"
                ? "Un simple RPG mêlant puzzles, aventure et combats. Inspiré par des jeux comme Undertale et OneShot."
                : "A simple RPG blending puzzles, adventure, and combat. Inspired by games like Undertale and OneShot.",
        img: "img/octavius.gif",
    },
    {
        title:
            lang === "fr" ? (
                <>
                    <nobr>La Lumière au</nobr> <nobr>Bout du Tunnel</nobr>
                </>
            ) : (
                <>
                    <nobr>The Light at the</nobr> <nobr>End of the Tunnel</nobr>
                </>
            ),
        technologies: "Unity, Procedural Generation",
        description:
            lang === "fr"
                ? "Un jeu procédural où chaque niveau est généré dynamiquement. Le joueur doit naviguer dans des tunnels sombres et résoudre des défis pour avancer."
                : "A procedural game where each level is dynamically generated. Players navigate dark tunnels and solve challenges to progress.",
        references: (
            <>
                {lang === "fr"
                    ? "En collaboration avec "
                    : "In collaboration with "}
                <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/sonika-lamont/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Sonika Lamont
                </a>
                {lang === "fr" ? " et " : " and "}
                <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/alexis-paquette-jeu/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Alexis Paquette
                </a>
            </>
        ),
        img: "img/frog.gif",
    },
    {
        title: lang === "fr" ? "Descente Minière" : "Mine Dive",
        technologies: "Adobe Animate",
        description:
            lang === "fr"
                ? "Une animation en 2D réalisée avec Adobe Animate, montrant le chemin rocambolesque d'un mineur dans sa mine."
                : "A 2D animation made with Adobe Animate, showing the adventurous path of a miner in his mine.",
        img: "img/anim.gif",
    },
    {
        title: "Dynamic Portals",
        technologies: "Unity, Shader Graph",
        description:
            lang === "fr"
                ? "Une démonstration de portails dynamiques utilisant des shaders avancés dans Unity, permettant des transitions fluides entre différents endroits."
                : "A showcase of dynamic portals using advanced shaders in Unity, enabling seamless transitions between different places.",
        references: (
            <>
                {lang === "fr" ? "Disponible sur " : "Available on "}
                <a
                    className="font-bold"
                    href="https://assetstore.unity.com/packages/tools/physics/dynamic-portals-235818"
                    target="_blank"
                    rel="noopener noreferrer">
                    Unity Asset Store
                </a>
            </>
        ),
        img: "img/portals.gif",
    },
];
