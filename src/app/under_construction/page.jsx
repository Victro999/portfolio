"use client";
import React from "react";
import { useLang } from "../_stores/Stores";

const UnderConstruction = () => {
    const lang = useLang((state) => state.lang);

    return (
        <div className="text-center mt-20 grow">
            <h1 className="text-4xl leading-7 text-turquoise">
                <p>Victor</p>
                <p>Aubry</p>
            </h1>
            <p className="text-3xl mt-12 font-bold">
                {lang === "fr"
                    ? "Site en construction"
                    : "Site under construction"}
            </p>
            <p className="mt-4">
                {lang === "fr"
                    ? "Veuillez revenir plus tard pour voir le site complet."
                    : "Please check back later to see the full site."}
            </p>
        </div>
    );
};

export default UnderConstruction;
