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
            className="w-1/4 aspect-square rounded-sm border border-gray-900 overflow-hidden relative shadow-xs">
            <Image
                src={project.img ?? "https://hum7264a4z.ufs.sh/f/4HNUvK0Y2eF3JZH9MhCINUoCQHkeOj95ZGlAWaFsETnrpxwy"}
                alt={project[`title_${lang}`]}
                width={512}
                height={512}
                className="w-full"
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
