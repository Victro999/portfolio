"use client";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import { Viga } from "next/font/google";
import Name from "./_components/Name";
import About from "./_components/About";
import Projects from "./_components/Projects";

export const viga = Viga({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
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

  return (
    <div
      className={`${viga.className} text-black`}
      data-scroll
      data-scroll-event-progress="progressEvent"
    >
      <Name progress={progress} />
      <About progress={progress} />
      <Projects />
    </div>
  );
}
