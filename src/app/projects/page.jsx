import React from "react";
import { getAllProjects } from "../_data/projects.js";
import ProjectCard from "../_components/ProjectCard.jsx";
import Title from "../_components/Title.jsx";

const Projects = async () => {
    const projects = await getAllProjects();

    return (
        <div className="my-8 grow">
            <Title content={{fr: "Projets", en: "Projects"}}/>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.slug}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;
