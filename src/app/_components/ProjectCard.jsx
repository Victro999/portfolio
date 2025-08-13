import React, { useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
    return (
        <div
            className={`w-[12vw] h-[12vw] border border-black transition-all duration-500 hover:w-[16vw] hover:h-[16vw] flex items-center justify-center overflow-hidden pointer-events-auto`}>
            <img
                src={project.img}
                alt=""
                className="object-cover w-[16vw] h-[16vw]"
            />
            {/* <h1>{project.title}</h1> */}
        </div>
    );
};

export default ProjectCard;
