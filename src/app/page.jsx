import ProjectCard from "./_components/ProjectCard";
import { getRandomProjects } from "./_data/projects";
import CTAButton from "./_components/CTAButton";
import HomePresentation from "./_components/HomeTitle";

const Home = async () => {
    const projects = await getRandomProjects(2, "");

    return (
        <div className="my-12 grow">
            <HomePresentation />
            <div className="mt-18 flex justify-center gap-4">
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
