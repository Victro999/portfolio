"use client";
import React from "react";
import { useLang } from "../_stores/Stores";

const HomePresentation = () => {
    const lang = useLang((state) => state.lang);

    return (
        <div className="flex flex-col items-center w-2/3 m-auto">
            <h1 className="text-8xl text-[#1ec4ab] font-bold">
                {lang === "fr" ? "Salut!" : "Hi!"}
            </h1>
            <p className="text-6xl">
                {lang === "fr" ? "Je suis Victor." : "I'm Victor."}
            </p>
            <p className="text-2xl text-center mt-6">
                {lang === "fr"
                    ? "Je suis développeur logiciel. J'adore créer des applications web et apprendre de nouvelles technologies."
                    : "I'm a software developer. I love creating web applications and learning new technologies."}
            </p>
        </div>
    );
};

export default HomePresentation;
