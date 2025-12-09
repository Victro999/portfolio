"use client";
import React from "react";
import { useLang } from "../_stores/Stores";

const HomePresentation = () => {
    const lang = useLang((state) => state.lang);

    return (
        <div className="flex flex-col items-center w-2/3 m-auto">
            <h1 className="text-4xl leading-7 text-turquoise">
                <p>Victor</p>
                <p>Aubry</p>
            </h1>
            <div className="text-center mt-12 text-[10rem] leading-[4rem] font-bold">
                <p className="text-shadow-lg">Dev</p>
                <p className="text-turquoise">&</p>
                <p>{lang === "fr" ? "Artiste" : "Artist"}</p>
            </div>
        </div>
    );
};

export default HomePresentation;
