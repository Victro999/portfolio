"use client";
import Image from "next/image";
import { useLang } from "../_stores/Stores";

const Project = ({ project }) => {
    const lang = useLang((state) => state.lang);
    const tags = JSON.parse(project.tags || "[]").join(", ");
    const collaborators = JSON.parse(project.collaborators || "[]");
    const images = JSON.parse(project.images || "[]");

    console.log(images);

    return (
        <div className="mt-2 m-auto">
            {collaborators.length > 0 && (
                <p className="text-center text-lg">
                    {lang === "fr"
                        ? "En collaboration avec "
                        : "In collaboration with "}
                    {collaborators.map((collab, index) => (
                        <a
                            key={index}
                            href={collab.href}
                            className="font-bold hover:underline text-turquoise">
                            {collab.name}
                        </a>
                    ))}
                </p>
            )}
            <p className="flex justify-center gap-8 m-auto text-2xl">{tags}</p>
            <div className="w-2/3 m-auto mt-8 rounded-sm aspect-video border border-gray-900 overflow-hidden relative">
                <Image
                    src={
                        project.preview ??
                        "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                    }
                    alt={project[`title_${lang}`]}
                    fill={true}
                    className="aspect-video w-full object-center object-cover"
                />
            </div>
            <div className="m-auto w-1/2 flex flex-col items-center mt-8">
                <h2 className="text-4xl font-bold">Description</h2>
                <p className="text-center text-lg mt-2">
                    {project[`description_${lang}`]}
                </p>
            </div>
            {images[0] != null && (
                <div className="flex justify-center gap-4 m-auto mt-8">
                    {images.map((src) => (
                        <div className="rounded-sm w-2/5 aspect-video border border-gray-900 overflow-hidden relative">
                            <Image
                                src={src}
                                alt={project[`title_${lang}`]}
                                fill={true}
                                className="aspect-video w-full object-center object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            <p className="text-center mt-12 font-bold text-2xl">
                {lang === "fr"
                    ? "Découvrez d'autres projets!"
                    : "Discover other projects!"}
            </p>
        </div>
    );
};

export default Project;
