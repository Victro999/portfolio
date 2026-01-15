import React from "react";
import Image from "next/image";
import About from "../_components/About.jsx";
import { getRandomTravelImages } from "../_data/travelImages";

async function AboutPage() {
    const images = await getRandomTravelImages(2);

    return <About images={images} />;
}

export default AboutPage;
