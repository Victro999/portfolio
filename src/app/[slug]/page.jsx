import React from "react";

const Project = ({ params }) => {
    const { slug } = params;
    return <div>{slug}</div>;
};

export default Project;
