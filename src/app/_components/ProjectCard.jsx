"use client";
import Image from "next/image";
import { useLang } from "../_stores/Stores";
import Link from "next/link";

const ProjectCard = ({ project }) => {
    const lang = useLang((state) => state.lang);
    const tags = JSON.parse(project.tags ?? "[]");

    return (
        <Link
            href={`projects/${project.slug}`}
            className="rounded-sm w-1/3 aspect-video border border-gray-900 overflow-hidden relative shadow-xs">
            <Image
                src={project.img ?? "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"}
                alt={project[`title_${lang}`]}
                width={512}
                height={512}
                className="aspect-video w-full object-center object-cover"
            />
            <div className="flex justify-between items-center gap-4 absolute w-full p-2 bg-gray-50/95 bottom-0">
                <p className="text-lg overflow-hidden text-ellipsis whitespace-nowrap">
                    {project[`title_${lang}`]}
                </p>
                <div className="flex h-fit text-xs gap-2">
                    {tags.map((tag, index) => (
                        <p
                            key={project.id + "-tag-" + index}
                            className="p-1 bg-gray-300 text-gray-900 rounded-sm">
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
