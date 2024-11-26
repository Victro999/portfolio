import Link from "next/link";
import React, { useState, useEffect } from "react";
import Underline from "./Underline";

const Name = ({ progress }) => {
    let name = "Victor Aubry";
    name = name.split("");

    return (
        <div
            data-scroll
            data-scroll-css-progress
            className={`flex flex-col justify-center h-screen items-center p-16 relative opacity-[calc(1-var(--progress)*1.5)]`}>
            <div className="flex">
                {name.map((letter, index) => (
                    <h1
                        key={index}
                        data-scroll
                        data-scroll-speed={index / 50}
                        className={`text-[10vw]`}>
                        {name[index] === " " ? "\u00A0" : name[index]}
                    </h1>
                ))}
            </div>
            <div 
            data-scroll
            data-scroll-speed="0.15"
            className="flex gap-4 text-[2vw] z-10">
                <a
                    href="https://www.linkedin.com/in/vic-aubry/"
                    target="_blank"
                    className="group relative">
                    LinkedIn
                    <Underline/>
                </a>
                <a
                    href="https://github.com/Victro999"
                    target="_blank"
                      className="group relative">
                    GitHub
                    <Underline/>
                </a>
            </div>
            <div
                className="w-3/4 h-3/4 absolute border-2 border-black bg-black bg-opacity-[0.02]"
                style={{ transform: `rotate(${-4 + progress * 50}deg)` }}
            />
            <div
                className="w-3/4 h-3/4 absolute border-2 border-black bg-black bg-opacity-[0.02]"
                style={{ transform: `rotate(${-8 + progress * 60}deg)` }}
            />
            <div
                className="w-3/4 h-3/4 absolute border-2 border-black bg-black bg-opacity-[0.02]"
                style={{ transform: `rotate(${-12 + progress * 70}deg)` }}
            />
        </div>
    );
};

export default Name;
