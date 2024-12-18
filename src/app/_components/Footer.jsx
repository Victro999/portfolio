import React from "react";
import Underline from "./Underline";

const Footer = ({ lang }) => {
    const content = {
        icons: lang === "fr" ? "Icônes par " : "Icons by ",
    };

    return (
        <footer className="p-8">
            <div className="flex justify-between items-end">
                <p className="text-[1vw]">
                    {content.icons}
                    <a className="underline" href="https://icons8.com" target="_blank">
                        Icons8
                    </a>
                </p>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/vic-aubry/" target="_blank" rel="noreferrer">
                        <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/nolan/96/1ec4ab/0e594e/linkedin.png"
                            alt="linkedin"
                            className="grayscale hover:grayscale-0 transition duration-500"
                        />
                    </a>
                    <a href="https://github.com/Victro999" target="_blank" rel="noreferrer">
                        <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/nolan/96/1ec4ab/0e594e/github.png"
                            alt="github"
                            className="grayscale hover:grayscale-0 transition duration-500"
                        />
                    </a>
                    <a href="https://assetstore.unity.com/publishers/52724" target="_blank" rel="noreferrer">
                        <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/nolan/96/1ec4ab/0e594e/unity-hub.png"
                            alt="unity-hub"
                            className="grayscale hover:grayscale-0 transition duration-500"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
