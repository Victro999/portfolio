import React from "react";
import Project from "./Project";
import { projects } from "../_data/projects";

const Projects = ({ lang }) => {
    const content = {
        title: lang === "fr" ? "Projets" : "Projects",
    };

    return (
        <div>
            <p>{content.title}</p>
            <div className={`w-full p-16`}>
                <div className="flex flex-wrap justify-between gap-16 p-8">
                    {projects(lang).map((project, index) => {
                        return (
                            <Project
                                key={`project-${index}`}
                                project={project}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
