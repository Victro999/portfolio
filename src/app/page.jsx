"use client";
import ProjectCard from "./_components/ProjectCard";
import { useEffect, useState } from "react";
import projects from "../../public/data/projects";

export default function Home() {
    const [lang, setLang] = useState("fr");
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const langParam = searchParams.get("lang");
        if (langParam === "en" || langParam === "fr") {
            setLang(langParam);
        }
    }, []);

    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const selectedProject = projects.find(
        (project) => project.id === selectedProjectId
    );

    return (
        <div className="p-8 w-full z-10">
            <div className="text-[12vw] sm:text-[4vw] line-height leading-[0.75]">
                <p>Victor</p>
                <p>Aubry</p>
            </div>
            <p className="text-[3.75vw] sm:text-[1.25vw] mt-4">
                {lang === "fr" ? "Dev & Artiste" : "Dev & Artist"}
            </p>
            <a
                href="https://drive.google.com/file/d/1e4zKTneexIAW0_aCaZTl_-w_XCNpQZOM/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="text-[6vw] sm:text-[2vw] fixed top-8 right-8 w-[16vw] h-[16vw] sm:w-[6vw] sm:h-[6vw] flex items-center justify-center transition-all border border-black hover:border-[3vw] hover:bg-black hover:text-white">
                <p>cv</p>
            </a>
            <div className="text-[3.75vw] sm:text-[1.25vw] fixed bottom-8 flex">
                <button
                    onClick={() => setLang("fr")}
                    className={`${
                        lang == "fr" && "underline"
                    } hover:underline`}>
                    fr
                </button>
                <p className="text-center">/</p>
                <button
                    onClick={() => setLang("en")}
                    className={`${
                        lang == "en" && "underline"
                    } hover:underline`}>
                    en
                </button>
            </div>
            <a
                href="https://www.linkedin.com/in/vic-aubry"
                target="_blank"
                rel="noreferrer"
                className="text-[3.75vw] sm:text-[1.25vw] fixed bottom-8 right-8 hover:underline">
                linkedin
            </a>
            {selectedProject && (
                <div className="fixed top-0 left-[64vw] sm:left-[60vw] h-full w-[28vw] flex items-center">
                    <div>
                        <h3 className="text-[4vw] sm:text-[3vw] leading-none text-wrap break-words hyphens-auto">
                            {selectedProject.title
                                ? selectedProject.title
                                : lang === "fr"
                                ? selectedProject.title_fr
                                : selectedProject.title_en}
                        </h3>
                        <p className="text-[2vw] sm:text-[1.5vw]">
                            -{selectedProject.technologies}
                        </p>
                        <p className="mt-[0.5vw] text-[3vw] sm:text-[1vw]">
                            {lang === "fr"
                                ? selectedProject.description_fr
                                : selectedProject.description_en}
                        </p>
                        {selectedProject.references_fr && (
                            <p
                                className="mt-[2vw] text-[3vw] sm:text-[1vw]"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        lang === "fr"
                                            ? selectedProject.references_fr
                                            : selectedProject.references_en,
                                }}></p>
                        )}
                    </div>
                </div>
            )}
            <div className="text-[3.75vw] sm:text-[1.25vw] fixed top-0 right-[64vw] sm:right-[60vw] h-full flex items-center">
                {selectedProject && (
                    <button
                        onClick={() => setSelectedProjectId(null)}
                        className="hover:underline">
                        {lang === "fr" ? "fermer" : "close"}
                    </button>
                )}
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center top-0 left-0 fixed gap-[1vw] pointer-events-none">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                            selectedProjectId={selectedProjectId}
                            setSelectedProjectId={setSelectedProjectId}
                        />
                    );
                })}
            </div>
        </div>
    );
}
