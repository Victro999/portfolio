import Link from "next/link";
import ProjectCard from "./_components/ProjectCard";
import { getProjectById, getRandomProjects } from "./_data/projects";
import { useLang } from "./_stores/Stores";
import HomePresentation from "./_components/HomePresentation";

const Home = async () => {
    const projects = await getRandomProjects(2);

    return (
        <div className="my-8">
            <HomePresentation />
            <div className="mt-12 flex justify-center gap-4">
                {projects.map((project) => (
                    <ProjectCard
                        project={project}
                        key={project.id}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center mt-4">
                <Link
                    href="/projects"
                    className="bg-[#1ec4ab] text-gray-50 py-1 px-2 rounded-sm">
                    {"fr" === "fr" ? "Tous mes projets" : "All my projects"}
                </Link>
            </div>
        </div>
    );
};

export default Home;
