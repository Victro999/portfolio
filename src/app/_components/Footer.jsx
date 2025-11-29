"use client";
import React from "react";
import { useLang } from "../_stores/Stores";

const Footer = () => {
    const lang = useLang((state) => state.lang);

    return (
        <footer className="py-4 border-t border-gray-900 text-xs flex justify-between items-center">
            <div>
                <p>
                    {lang === "fr"
                        ? "© 2025 Victor Aubry. Tous droits réservés."
                        : "© 2025 Victor Aubry. All rights reserved."}
                </p>
                <p>
                    {lang === "fr" ? "Icônes par " : "Icons by "}
                    <a
                        className="underline"
                        href="https://icons8.com"
                        target="_blank">
                        Icons8
                    </a>
                </p>
            </div>
            <div className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/vic-aubry/"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/nolan/96/1ec4ab/linkedin.png"
                        alt="linkedin"
                        className="grayscale hover:grayscale-0 transition duration-500"
                    />
                </a>
                <a
                    href="https://github.com/Victro999"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/nolan/96/1ec4ab/github.png"
                        alt="github"
                        className="grayscale hover:grayscale-0 transition duration-500"
                    />
                </a>
                <a
                    href="https://assetstore.unity.com/publishers/52724"
                    target="_blank"
                    rel="noreferrer">
                    <img
                        width="48"
                        height="48"
                        src="https://img.icons8.com/nolan/96/1ec4ab/unity-hub.png"
                        alt="unity-hub"
                        className="grayscale hover:grayscale-0 transition duration-500"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
