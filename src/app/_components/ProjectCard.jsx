"use client";
import Image from "next/image";
import { useLang } from "../_stores/Stores";
import Link from "next/link";

const ProjectCard = ({ project, width }) => {
    const lang = useLang((state) => state.lang);
    const tags = JSON.parse(project.tags ?? "[]");

    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`w-2/5 rounded-sm hover:scale-101 aspect-video border hover:shadow-xl transition-all border-gray-900 overflow-hidden relative shadow-xs`}>
            <Image
                src={project.preview ?? "https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"}
                alt={project[`title_${lang}`]}
                fill={true}
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
                            className="p-1 bg-gray-50 border rounded-sm">
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
