import React from "react";

const Project = ({ project }) => {
    const { title, technologies, description, preview, img } = project;

    return (
        <div
            data-scroll
            data-scroll-css-progress
            data-scroll-position="start,start"
            className={`flex w-full gap-8 opacity-[var(--progress)]`}>
            <div>
                <h3 className="text-[4vw] leading-none text-wrap w-min">{title}</h3>
                <p className="text-[1.5vw]">-{technologies}</p>
                <p className="mt-4 text-[2vw] max-w-[25vw]">{description}</p>
            </div>
            <div className="flex justify-end w-full ">
                {preview}
                {img && <img className="w-full max-w-[90vh] aspect-square h-fit max-h-[90vh]" src={img} alt={title} />}
            </div>
        </div>
    );
};

export default Project;
