import React from "react";

const Project = ({ project }) => {
    return (
        <div
            data-scroll
            data-scroll-css-progress
            className={`flex w-[calc(50%-1rem)] opacity-[var(--progress)]`}>
            <div>
                <h3 className="text-[2vw]">{project.title}</h3>
                <p>{project.technologies}</p>
                <p>{project.description}</p>
            </div>
            {project.preview}
        </div>
    );
};

export default Project;
