import React from "react";
import { getAllProjects } from "../_data/projects.js";

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
                    <div className="w-64 h-64 rounded-sm border border-gray-900">
                        {project.title_fr}
                        <video
                            src={project.img}
                            className="w-full h-full object-cover rounded-sm"
                            autoPlay
                            loop
                            muted></video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
