import React from "react";

const Project = ({ project }) => {
    const { title, technologies, description, references, preview, img } =
        project;

    return (
        <div className={`flex w-full gap-8`}>
            <div>
                <h3 className="text-[4vw] leading-none text-wrap w-min">
                    {title}
                </h3>
                <p className="text-[1.5vw]">-{technologies}</p>
                <p className="mt-4 text-[2vw] max-w-[25vw] w-max">
                    {description}
                </p>
                {references && (
                    <p className="mt-16 text-[1.5vw]">{references}</p>
                )}
            </div>
            <div className="flex justify-end w-full">
                {preview}
                {img && (
                    <img
                        data-scroll
                        data-scroll-speed="0.1"
                        className="w-full max-w-[90vh] aspect-square h-fit max-h-[90vh] object-cover border border-black rounded-md"
                        src={img}
                        alt={title}
                    />
                )}
            </div>
        </div>
    );
};

export default Project;
