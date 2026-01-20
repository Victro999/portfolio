"use client";
import React from "react";
import { useLang } from "../_stores/Stores";
import { ArcherContainer, ArcherElement } from "react-archer";
import Title from "../_components/Title";
import Interests from "../_components/Interests.jsx";
import Image from "next/image";

const About = ({ images }) => {
    const lang = useLang((state) => state.lang);
    const events = [
        {
            date: "2014",
            description_en: "Discovered Scratch",
            description_fr: "Découverte de Scratch",
        },
        {
            date: "2019",
            description_en: "Installed Unity on a dusty computer",
            description_fr:
                "Installation de Unity sur un ordinateur poussiéreux",
        },
        {
            date: "2023",
            description_en: "Started Multimedia Integration Techniques at CSTJ",
            description_fr:
                "Début en Techniques d'intégration multimédia au CSTJ",
        },
        {
            date: "2023",
            description_en: "First project on Unity Asset Store",
            description_fr: "Premier projet sur Unity Asset Store",
        },
        {
            date: "2025",
            description_en: "Started IT Engineering at ÉTS",
            description_fr: "Début en génie de TI à l'ÉTS",
        },
    ];

    return (
        <div className="grow my-12">
            <Title content={{ fr: "À propos", en: "About" }} />
            <h2 className="text-2xl font-bold w-2/3 text-center text-balance mt-8 m-auto">
                {lang === "fr"
                    ? `Je suis un développeur animé par un amour pour les arts et les mathématiques sous toutes leurs formes.`
                    : "I’m a developer driven by a love for arts and maths in all their forms."}
            </h2>
            <p className="text-center w-1/2 mt-4 m-auto">
                {lang === "fr"
                    ? "Mon parcours englobe le design, le développement de jeux et les technologies web, et je suis particulièrement attiré par les projets où l'identité visuelle et le code sont indissociables."
                    : "My background spans design, game development, and web technologies, and I’m especially drawn to projects where visual identity and code are inseparable."}
            </p>
            <div className="mt-6 relative">
                <div className="bg-gray-900 w-full h-1 rounded absolute top-1.5"></div>
                <div className="flex justify-between z-1 relative gap-4">
                    {events.map((event, index) => (
                        <div key={index} className="w-1/8">
                            <div className="bg-turquoise border-4 border-gray-50 w-6 h-4 rounded-full z-10 m-auto"></div>
                            <p className="mt-2 font-bold text-center">
                                {event.date}
                            </p>
                            <p className="text-xs text-center text-balance">
                                {lang === "fr"
                                    ? event.description_fr
                                    : event.description_en}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="w-2/3 font-bold text-balance text-2xl text-center mt-12 m-auto">
                {lang === "fr"
                    ? "Mes intérêts résultent d'un croisement entre différentes disciplines."
                    : "My interests lie at the intersection of different disciplines."}
            </h2>
            <div className="m-auto w-3/4 mt-4">
                <ArcherContainer>
                    <div className="flex justify-center gap-24">
                        <Interests id="physics" targetIds={["gameDev", "vfx"]}>
                            {lang === "fr" ? "Physique" : "Physics"}
                        </Interests>
                        <Interests
                            id="arts"
                            targetIds={[
                                "design",
                                "digitalArt",
                                "graphicsProg",
                            ]}>
                            Art
                        </Interests>
                        <Interests
                            id="tech"
                            targetIds={["web", "digitalArt", "graphicsProg"]}>
                            {lang === "fr" ? "Technologie" : "Technology"}
                        </Interests>
                    </div>
                    <div className="flex justify-center gap-24 mt-12">
                        <Interests id="psy" targetIds={["design"]}>
                            {lang === "fr" ? "Psychologie" : "Psychology"}
                        </Interests>
                        <Interests
                            id="graphicsProg"
                            targetIds={["gameDev", "vfx"]}>
                            {lang === "fr"
                                ? "Programmation de rendu"
                                : "Graphics Programming"}
                        </Interests>
                        <Interests id="digitalArt" targetIds={["gameDev"]}>
                            {lang === "fr" ? "Art digital" : "Digital Art"}
                        </Interests>
                    </div>
                    <div className="flex justify-center gap-24 mt-12">
                        <Interests
                            id="design"
                            targetIds={["web", "gameDesign"]}>
                            Design
                        </Interests>
                        <Interests id="gameDev" targetIds={["gameDesign"]}>
                            {lang === "fr"
                                ? "Développement de jeux"
                                : "Game Dev"}
                        </Interests>
                    </div>
                    <div className="flex justify-center gap-24 mt-12">
                        <Interests id="vfx" targetIds={[]}>
                            VFX
                        </Interests>
                        <Interests id="gameDesign" targetIds={[]}>
                            {lang === "fr" ? "Design de jeux" : "Game Design"}
                        </Interests>
                        <Interests id="web" targetIds={[]}>
                            {lang === "fr" ? "Développement web" : "Web Dev"}
                        </Interests>
                    </div>
                </ArcherContainer>
                <p className="text-[0.5rem] mt-2 text-center">
                    {lang === "fr"
                        ? "Remarque: Mes diagrammes UML ne ressemblent pas à ça :)"
                        : "Notice: My UML charts don't look like that :)"}
                </p>
            </div>
            <p className="text-center w-1/2 mt-4 m-auto">
                {lang === "fr"
                    ? "Je n’ai pas encore choisi de spécialité unique et cette ouverture est intentionnelle. Je reste curieux et désireux d’apprendre, même au-delà de ce qui m’est familier."
                    : "I haven’t committed to a single specialty yet, that openness is intentional. I’m driven by curiosity and a constant desire to learn, even beyond what’s familiar."}
            </p>
            <div className="w-5/6 m-auto flex mt-12 justify-center gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full rounded-sm aspect-[1.5] border border-gray-900 overflow-hidden relative">
                        <Image
                            src={image.src}
                            alt={image.description_en}
                            fill={true}
                            sizes="40vw"
                            className="object-cover"
                        />
                        <p className="text-xs border border-gray-900 absolute bottom-0 left-0 bg-gray-50 p-1 m-2 rounded-sm">
                            {image[`description_${lang}`]}
                        </p>
                        <p className="text-[0.5rem] text-gray-50 absolute bottom-0 right-0 px-1">
                            {lang === "fr" ? "Crédit : " : "Credit: "}
                            <a href="https://www.zoomstudiophoto.com/">Zoom Multimédia</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
