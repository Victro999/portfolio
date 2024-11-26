import html2canvas from "html2canvas";
import React, { useEffect, useRef } from "react";

const PagePreview = () => {
  const canvasRef = useRef(null);

  const animate = () => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      const ctx = canvasElement.getContext("2d", { willReadFrequently: true });
      if (ctx) {
        const width = canvasElement.width;
        const height = canvasElement.height;

        renderCanvas(ctx, width, height);
      }
    }
  };

  const renderCanvas = async (ctx, width, height) => {
    const canvas = await html2canvas(document.body);
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(canvas, 0, 0, width, height);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="ratio-16/9 w-full"
      />
    </div>
  );
};

export default PagePreview;
