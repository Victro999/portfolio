"use client";
import React from "react";
import { useLang } from "../_stores/Stores";
import Link from "next/link";

const HomePresentation = () => {
    const lang = useLang((state) => state.lang);

    return (
        <div className="flex flex-col items-center w-2/3 m-auto">
            <div className="relative">
                <h1 className="text-4xl leading-7 text-turquoise">
                    <p>Victor</p>
                    <p>Aubry</p>
                </h1>
                <Link className={`leading-none p-1 px-1.75 text-nowrap text-xs bg-gray-700 text-gray-50 rounded-full w-5 h-5 absolute -right-5 -bottom-0.5 hover:shadow-xl duration-300 transition-all ${lang === "fr" ? "hover:w-29 hover:-right-29" : "hover:w-27 hover:-right-27"}`}
                    href="/about"
                    >
                    +&ensp;{lang === "fr" ? "À propos de moi" : "More about me"}
                </Link>
            </div>
            <div className="text-center mt-12 text-[10rem] leading-16 font-bold text-shadow-sm">
                <p>Dev</p>
                <p className="text-turquoise">&</p>
                <p>{lang === "fr" ? "Artiste" : "Artist"}</p>
            </div>
        </div>
    );
};

export default HomePresentation;
