import Link from "next/link";
import ProjectCard from "./_components/ProjectCard";
import { getRandomProjects } from "./_data/projects";
import CTAButton from "./_components/CTAButton";
import HomePresentation from "./_components/HomeTitle";

const Home = async () => {
    const projects = await getRandomProjects(3);

    return (
        <div className="my-8 flex-grow">
            <HomePresentation />
            <div className="mt-24 flex justify-center gap-4">
                {projects.map((project) => (
                    <ProjectCard
                        project={project}
                        key={project.slug}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center mt-4">
                <CTAButton
                    href="/projects"
                    content={{ fr: "Tous mes projets", en: "All my projects" }}
                />
            </div>
        </div>
    );
};

export default Home;
