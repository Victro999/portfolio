"use client";
import Image from "next/image";
import { useLang } from "../_stores/Stores";

const Project = ({ project }) => {
    const lang = useLang((state) => state.lang);
    const tags = JSON.parse(project.tags || "[]").join(", ");
    const collaborators = JSON.parse(project.collaborators || "[]");

    return (
        <div className="mt-2 m-auto">
            <p className="flex justify-center gap-8 m-auto text-3xl">{tags}</p>
            {collaborators.length > 0 && (
                <p className="text-center mt-8">
                    {lang === "fr"
                        ? "En collaboration avec "
                        : "In collaboration with "}
                    {collaborators.map((collab, index) => (
                        <a
                            key={index}
                            href={collab.href}
                            className="font-bold hover:underline">
                            {collab.name}
                        </a>
                    ))}
                </p>
            )}
            <Image
                src={
                    project.img ??
                    "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                }
                alt={project[`title_${lang}`]}
                width={1024}
                height={1024}
                className="aspect-video object-cover rounded-sm border border-gray-900 overflow-hidden mt-8 m-auto"
            />
            <div className="m-auto w-1/2 flex flex-col items-center mt-8">
                <h2 className="text-4xl font-bold">Description</h2>
                <p className="text-center text-lg mt-2">
                    {project[`description_${lang}`]}
                </p>
            </div>
            <div className="flex gap-2 w-3/4 m-auto mt-8">
                <Image
                    src={
                        project.img ??
                        "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                    }
                    alt={project[`title_${lang}`]}
                    width={1024}
                    height={1024}
                    className="aspect-video object-cover rounded-sm border border-gray-900 overflow-hidden m-auto"
                />
                <Image
                    src={
                        project.img ??
                        "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                    }
                    alt={project[`title_${lang}`]}
                    width={1024}
                    height={1024}
                    className="aspect-video object-cover rounded-sm border border-gray-900 overflow-hidden m-auto"
                />
            </div>
        </div>
    );
};

export default Project;
