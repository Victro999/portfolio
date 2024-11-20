"use client"
import Image from "next/image";
import Name from "./_components/Name";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { GFS_Didot } from 'next/font/google'
 
export const doto = GFS_Didot({
  subsets: ['greek'],
  weight: '400',
})

export default function Home() {
  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  return (
    <div className="p-16 h-[2000px]">
      <Name />
    </div>
  );
}
