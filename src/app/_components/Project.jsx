"use client";
import Image from "next/image";
import { useLang } from "../_stores/Stores";

const Project = ({ project }) => {
    const lang = useLang((state) => state.lang);
    const tags = JSON.parse(project.tags || "[]").join(", ");
    const collaborators = JSON.parse(project.collaborators || "[]");
    const images = JSON.parse(project.images || "[]");

    return (
        <div className=" m-auto">
            <p className="flex justify-center gap-8 m-auto font-bold text-2xl">
                {tags}
            </p>
            {collaborators.length > 0 && (
                <p className="text-center text-lg w-1/2 text-balance m-auto mt-4">
                    {lang === "fr"
                        ? "En collaboration avec "
                        : "In collaboration with "}
                    {collaborators.map((collab, index) => (
                        <span key={"collaborator_" + index}>
                            {index > 0 && (
                                <span>{lang === "fr" ? " et " : " and "}</span>
                            )}
                            <a
                                href={collab.href}
                                className="font-bold hover:underline text-turquoise text-nowrap">
                                {collab.name}
                            </a>
                        </span>
                    ))}
                </p>
            )}
            {project.asset_url && (
                <p className="text-center text-lg mt-4">
                    {lang === "fr" ? "Disponible sur " : "Available on "}
                    <a
                        href={project.asset_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:underline text-turquoise">
                        Unity Asset Store
                    </a>
                </p>
            )}
            <div className="w-2/3 m-auto mt-8 rounded-sm aspect-video border border-gray-900 overflow-hidden relative">
                <Image
                    src={
                        project.preview ??
                        "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                    }
                    alt={project[`title_en`]}
                    fill={true}
                    sizes="66vw"
                    priority={true}
                    className="aspect-video w-full object-center object-cover"
                />
            </div>
            <h2 className="text-2xl font-bold mt-8 text-center">Description</h2>
            <p className="text-center w-2/3 m-auto mt-4">{project[`description_${lang}`]}</p>
            {images[0] != null && (
                <div className="flex justify-center gap-4 m-auto mt-8">
                    {images.map((src, index) => (
                        <div className="rounded-sm w-2/5 aspect-video border border-gray-900 overflow-hidden relative"
                            key={project.id + "-image-" + index}>
                            <Image
                                src={src}
                                alt={`${project[`title_${lang}`]}_image_${index}`}
                                fill={true}
                                sizes="40vw"
                                className="aspect-video w-full object-center object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            <h2 className="text-center mt-12 font-bold text-2xl">
                {lang === "fr"
                    ? "Découvrez d'autres projets!"
                    : "Discover other projects!"}
            </h2>
        </div>
    );
};

export default Project;
