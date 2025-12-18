import React from "react";
import { getProjectBySlug } from "../../_data/projects";
import Title from "../../_components/Title";
import Project from "../../_components/Project";

const ProjectPage = async ({ params }) => {
    const project = await getProjectBySlug(params.slug);

    return (
        <div className="my-12 grow">
            <Title content={{ fr: project.title_fr, en: project.title_en }} />
            <Project project={project} />
        </div>
    );
};

export default ProjectPage;
