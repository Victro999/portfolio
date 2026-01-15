import React from "react";
import { getAllProjects } from "../_data/projects.js";
import ProjectCard from "../_components/ProjectCard.jsx";
import Title from "../_components/Title.jsx";

const Projects = async () => {
    const projects = await getAllProjects();

    return (
        <div className="my-12 grow">
            <Title content={{fr: "Projets", en: "Projects"}}/>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={project.slug} width={index%5 === 0 || (index-1)%5 === 0 ? "w-2/5" : "w-[calc((4/5*100%-1rem)/3)]"} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
