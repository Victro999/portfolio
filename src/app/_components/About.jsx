import React from "react";

const About = ({ lang }) => {
    const content = {
        title: lang === "fr" ? "À propos" : "About",
        profil:
            lang === "fr"
                ? "Étudiant créatif avec une passion pour les expériences interactives"
                : "Creative student with a passion for interactive experiences",
    };

    return (
        <div className="overflow-hidden">
            <p>{content.title}</p>
            <div className={`w-full flex p-16`}>
                <div data-scroll data-scroll-speed="0.1" className="w-[50%] flex justify-end">
                    <img
                        src="/img/victor.jpg"
                        alt="Victor"
                        className="aspect-square translate-x-[-6em] h-fit max-h-[90vh] object-cover border border-black rounded-md"
                    />
                </div>
                <div className="w-[50%] justify-center flex items-center">
                    <p className="text-[4vw] leading-none">{content.profil}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
