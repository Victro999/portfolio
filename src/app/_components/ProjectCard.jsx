"use client";
const ProjectCard = ({project}) => {
    return (
        <div className="w-[24rem] h-[24rem] rounded-sm border border-gray-900">
            {project.title_fr}
        </div>
    );
};

export default ProjectCard;
