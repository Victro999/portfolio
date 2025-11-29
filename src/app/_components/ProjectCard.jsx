"use client";
import Image from "next/image";
import { useLang } from "../_stores/Stores";

const ProjectCard = ({ project }) => {
    const lang = useLang((state) => state.lang);

    return (
        <div className="w-[16rem] h-[16rem] rounded-sm border border-gray-900 overflow-hidden relative">
            <Image
                src={project.img ?? ""}
                alt={project[`title_${lang}`]}
                width={512}
                height={512}
                className="w-full"
            />
            <div className="absolute w-full p-2 bg-slate-50 bg-opacity-50 bottom-0">
                <p>{project[`title_${lang}`]}</p>
                <div className="flex text-xs gap-2">
                    <p className="p-1 bg-gray-200 rounded-md">Web</p>
                    <p className="p-1 bg-gray-200 rounded-md">Design</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
