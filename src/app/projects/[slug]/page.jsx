import React from "react";
import { getAllProjectSlugs, getProjectBySlug, getRandomProjects } from "../../_data/projects";
import Title from "../../_components/Title";
import Project from "../../_components/Project";
import ProjectCard from "../../_components/ProjectCard";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs();

    return slugs.map((slug) => ({
        slug,
    }));
}

const ProjectPage = async ({ params }) => {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    const randomProjects = await getRandomProjects(3, params.slug);

    return (
        <div className="my-12 grow">
            <Title content={{ fr: project.title_fr, en: project.title_en }} />
            <Project project={project} />
            <div className="mt-4 w-3/4 m-auto flex justify-center gap-4">
                {randomProjects.map((project) => (
                    <ProjectCard
                        project={project}
                        key={project.slug}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
