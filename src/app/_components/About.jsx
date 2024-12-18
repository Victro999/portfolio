import Image from "next/image";
import React from "react";
import Underline from "./Underline";
import Games from "./Games";

const About = ({ lang }) => {
    const content = {
        title: lang === "fr" ? "À propos" : "About",
        profil: lang === "fr" ? "Étudiant créatif avec une passion pour les expériences interactives" : "Creative student with a passion for interactive experiences",
    };    

    return (
        <div className="overflow-hidden">
            <p>{content.title}</p>
            <div className={`w-full p-16 ml-[-5em] flex flex-row-reverse gap-16`}>
                <div className="flex flex-col gap-8 justify-center">
                    <p className="text-[4vw] leading-none">
                        {content.profil}
                    </p>
                </div>
                <img
                    data-scroll
                    data-scroll-speed="0.1"
                    src="/img/victor.jpg"
                    alt="Victor"
                    className="w-full max-w-[90vh] aspect-square h-fit max-h-[90vh] object-cover border border-black rounded-md"
                />
            </div>
        </div>
    );
};

export default About;
