import html2canvas from "html2canvas";
import React, { useEffect, useRef, useState } from "react";

const PagePreview = () => {
    const canvasRef = useRef(null);
    let frame = 0;

    const animate = async () => {
        if (frame % 60 === 0) {
            const canvasElement = canvasRef.current;
            if (canvasElement) {
                const ctx = canvasElement.getContext("2d", {
                    willReadFrequently: true,
                });
                if (ctx) {
                    const width = canvasElement.width;
                    const height = canvasElement.height;
                    const canvas = await html2canvas(document.body);
                    ctx.drawImage(canvas, 0, 0, width, height);
                }
            }
        }
        frame++;
        requestAnimationFrame(animate);
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <div className="w-full">
            <canvas
                ref={canvasRef}
                width={420}
                height={960}
                className="w-1/4 aspect-square"
            />
        </div>
    );
};

export default PagePreview;
