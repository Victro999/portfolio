import Image from "next/image";
import React from "react";

const About = ({ progress }) => {
    console.log(progress);
    return (
        <div data-scroll data-scroll-css-progress className={`w-full h-screen`}>
            <h2 className="text-[4em] text-center">À propos de moi</h2>
            <Image
                width="200"
                height="200"
                src="/images/victor.jpg"
                className="rounded-full"
                style={{ transform: `rotate(${progress * 100}deg)` }}
            />
        </div>
    );
};

export default About;
