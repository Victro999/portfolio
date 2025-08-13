"use client";
import ProjectCard from "./_components/ProjectCard";
import { useEffect, useState } from "react";
import { projects } from "./_data/projects";

export default function Home() {
    const [lang, setLang] = useState("fr");
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const langParam = searchParams.get("lang");
        if (langParam === "en" || langParam === "fr") {
            setLang(langParam);
        }
    }, []);

    return (
        <div>
            <div className="p-8 w-full h-screen z-10">
                <div className="text-[4vw] line-height leading-none">
                    <p>Victor</p>
                    <p>Aubry</p>
                </div>
                <a
                    href="https://drive.google.com/file/d/1e4zKTneexIAW0_aCaZTl_-w_XCNpQZOM/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[2vw] fixed top-8 right-8 w-[6vw] h-[6vw] flex items-center justify-center transition-all border border-black hover:border-[3vw] hover:text-white">
                    <div className="w-full h-full absolute border border-black"></div>
                    <p>cv</p>
                </a>
                <div className="text-[1.5vw] fixed bottom-8 flex">
                    <button
                        onClick={() => setLang("fr")}
                        className={`${lang == "fr" && "underline"}`}>
                        fr
                    </button>
                    <p className="w-[1.51w] text-center">/</p>
                    <button
                        onClick={() => setLang("en")}
                        className={`${lang == "en" && "underline"}`}>
                        en
                    </button>
                </div>
                <a
                    href="https://www.linkedin.com/in/vic-aubry"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[1.5vw] fixed bottom-8 right-8 hover:underline">
                    linkedin
                </a>
            </div>
            <div className="w-full h-full flex items-center justify-center top-0 left-0 fixed gap-[1vw] pointer-events-none">
                {projects(lang).map((project, index) => {
                    return (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                        />
                    );
                })}
            </div>
        </div>
    );
}
