const ProjectCard = ({ project, selectedProjectId, setSelectedProjectId }) => {
    const onClick = () => {
        if (project.id == selectedProjectId) setSelectedProjectId(null);
        else setSelectedProjectId(project.id);
    };

    return (
        <div
            className={`w-[18vw] border border-black transition-all saturate-0 hover:saturate-100 duration-500 flex items-center justify-center overflow-hidden pointer-events-auto ${
                selectedProjectId == project.id ?
                "saturate-100 h-[18vw]" : "h-[4vw]"
            }`}
            onClick={onClick}>
            <img
                src={project.img}
                alt=""
                className="object-cover w-[18vw] h-[18vw]"
            />
        </div>
    );
};

export default ProjectCard;
