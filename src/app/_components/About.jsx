import Image from "next/image";
import React from "react";
import Underline from "./Underline";

const About = ({ progress, lang }) => {
    const content = {
        title: lang === "fr" ? "À propos" : "About",
    };

    return (
        <div>
            <p>{content.title}</p>
            <div
                data-scroll
                data-scroll-css-progress
                className={`w-full h-screen p-16`}>
                <Image
                    width="200"
                    height="200"
                    src="/images/victor.jpg"
                    className="rounded-full"
                    style={{ transform: `rotate(${progress * 100}deg)` }}
                />
                <div className="flex gap-4 text-[2vw] z-10">
                    <a
                        href="https://www.linkedin.com/in/vic-aubry/"
                        target="_blank"
                        className="group relative">
                        LinkedIn
                        <Underline />
                    </a>
                    <a
                        href="https://github.com/Victro999"
                        target="_blank"
                        className="group relative">
                        GitHub
                        <Underline />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
