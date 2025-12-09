import React from "react";
import { getProjectBySlug } from "../../_data/projects";
import Title from "../../_components/Title";

const Project = async ({ params }) => {
    const project = await getProjectBySlug(params.slug);

    return (
        <div className="my-8 flex-grow">
            <Title content={{ fr: project.title_fr, en: project.title_en }} />
        </div>
    );
};

export default Project;
