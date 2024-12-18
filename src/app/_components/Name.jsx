import React from "react";

const Name = ({ progress, lang }) => {    
    const content = {
        name: "Victor Aubry",
        profil: lang === "fr" ? "Développeur & Artiste" : "Developer & Artist",
    }
    
    const name = content.name.split("");

    return (
        <div
            data-scroll
            // data-scroll-css-progress
            className={`flex flex-col justify-center h-screen items-center p-16 relative opacity-[calc(1-var(--progress))] overflow-hidden`}>
            <div className="flex">
                {name.map((letter, index) => (
                    <h1
                        key={index}
                        data-scroll
                        data-scroll-speed={(index - name.length / 2) / 50}
                        className={`text-[10vw]`}>
                        {name[index] === " " ? "\u00A0" : name[index]}
                    </h1>
                ))}
            </div>
            <p>{content.profil}</p>
            <div
                className="w-3/4 h-3/4 absolute border-2 border-black bg-black bg-opacity-[0.01] rounded-md"
                style={{ transform: `rotate(${-8 + progress * 50}deg)` }}
            />
            <div
                className="w-3/4 h-3/4 absolute border-2 border-black bg-black bg-opacity-[0.01] rounded-md"
                style={{ transform: `rotate(${-10 + progress * 40}deg)` }}
            />
            <div
                className="w-3/4 h-3/4 absolute border-2 border-black bg-black bg-opacity-[0.01] rounded-md"
                style={{ transform: `rotate(${-12 + progress * 30}deg)` }}
            />
        </div>
    );
};

export default Name;
