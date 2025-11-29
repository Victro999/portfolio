import React from "react";
import { getAllProjects } from "../_data/projects.js";
import ProjectCard from "../_components/ProjectCard.jsx";

const Projects = async () => {
    const tags = [
        "All Projects",
        "Web Development",
        "Game Development",
        "Art & Design",
    ];

    const projects = await getAllProjects();

    return (
        <div className="my-8 m-auto w-[50rem]">
            <div>
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-sm mr-4 mb-4 hover:bg-gray-300 transition">
                        {tag}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap gap-4">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;
