import React from "react";
import { ArcherElement } from "react-archer";

const Interests = ({ children, id, targetIds }) => {
    return (
        <ArcherElement
            id={id}
            relations={targetIds.map((targetId) => ({
                targetId: targetId,
                targetAnchor: "top",
                sourceAnchor: "bottom",
                style: {
                    strokeColor: "#1ec4ab",
                    strokeWidth: 2,
                },
            }))}>
            <div className="p-2 bg-gray-50 z-1 border rounded-sm">{children}</div>
        </ArcherElement>
    );
};

export default Interests;
