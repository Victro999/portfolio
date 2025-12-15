"use client";
import React, { use } from "react";
import { useLang } from "./_stores/Stores";
import Link from "next/link";

const notFound = () => {
    const lang = useLang((state) => state.lang);

    return (
        <div className="flex flex-col w-full items-center gap-2 my-8 grow">
            <p className="text-3xl font-bold">
              {lang === "fr" ? "Page introuvable :(" : "Page not found :("}</p>
            <Link className="text-sm hover:underline" href="/">
                {lang === "fr" ? "Retour à l'accueil" : "Return home"}
            </Link>
        </div>
    );
};

export default notFound;
