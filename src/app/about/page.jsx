import React from "react";
import Title from "../_components/Title";

function About() {
    return (
        <div className="grow my-8">
            <Title content={{ fr: "À propos", en: "About" }} />
            {/* <p className="text-6xl">
                {lang === "fr" ? "Je suis Victor." : "I'm Victor."}
            </p>
            <p className="text-2xl text-center mt-6">
                {lang === "fr"
                    ? "Un étudiant en informatique et un artiste dans l'âme. J'explore le développement web, la création de jeux vidéo, et l'art numérique."
                    : "I am a computer science student and an artist at heart. I explore web development, game creation, and digital art."}
            </p> */}
            {/* <h1 className="text-8xl text-turquoise font-bold">
                {lang === "fr" ? "Salut!" : "Hi!"}
            </h1> */}
        </div>
    );
}

export default About;
