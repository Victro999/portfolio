import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useState } from "react";

const PortfolioPreview = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        new LocomotiveScroll();

        window.addEventListener("progressEvent", (e) => {
            setProgress(e.detail.progress);
        });

        return () => {
            window.removeEventListener("progressEvent", () => {});
        };
    }, []);

    return <div>PortfolioPreview</div>;
};

export default PortfolioPreview;
