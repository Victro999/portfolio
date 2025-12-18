"use client";
import React from "react";
import { useLang } from "../_stores/Stores";

const Title = ({ content }) => {
    const lang = useLang((state) => state.lang);

    return <h1 className="text-center text-6xl text-shadow-xs font-bold">{content[lang]}</h1>;
};

export default Title;
