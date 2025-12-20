"use client";
import { useLang } from "../_stores/Stores";
import React from "react";

const Mobile = () => {
    const lang = useLang((state) => state.lang);
    const setLang = useLang((state) => state.setLang);

    return (
        <div>
            <header className="pt-8 flex justify-end">
                <nav>
                    <button
                        className="text-2xl text-end font-bold mt-[-20px]"
                        onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
                        {lang === "fr" ? "EN" : "FR"}
                    </button>
                </nav>
            </header>
            <div className="text-center mt-16 grow">
                <h1 className="text-4xl leading-7 text-turquoise">
                    <p>Victor</p>
                    <p>Aubry</p>
                </h1>
                <p className="text-3xl mt-12 font-bold">
                    {lang === "fr"
                        ? "Version mobile en construction"
                        : "Mobile version under construction"}
                </p>
                <p className="mt-4">
                    {lang === "fr"
                        ? " Veuillez visiter ce site sur un ordinateur de bureau pour une meilleure expérience."
                        : "Please visit this site on a desktop for the best experience."}
                </p>
            </div>
        </div>
    );
};

export default Mobile;
