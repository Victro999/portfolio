"use client";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import Name from "./_components/Name";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";

export default function Home() {
    const [progress, setProgress] = useState(0);
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        new LocomotiveScroll();

        window.addEventListener("progressEvent", (e) => {
            setProgress(e.detail.progress);
        });

        return () => {
            window.removeEventListener("progressEvent", () => {});
        };
    }, []);

    return (
        <div
            data-scroll
            data-scroll-event-progress="progressEvent">
            <button
                onClick={() => setLang(lang === "fr" ? "ang" : "fr")}
                className="z-10 text-2xl fixed font-bold p-4 right-0">
                {lang}
            </button>
            <Name progress={progress} lang={lang} />
            <div className="w-full h-[1px] bg-gray-300" />
            <About progress={progress} lang={lang} />
            <div className="w-full h-[1px] bg-gray-300" />
            <Projects progress={progress} lang={lang} />
            <div className="w-full h-[1px] bg-gray-300" />
            <Footer />
        </div>
    );
}
