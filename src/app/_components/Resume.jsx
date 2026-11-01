'use client'

import React, { useEffect } from "react";
import { useLang } from "../_stores/Stores";
import { useSearchParams } from "next/navigation";
import { getHeaderLinks, getSections } from "../_data/resume";
import ResumeSection from "../_components/ResumeSection";

const Resume = () => {
    const lang = useLang((state) => state.lang);
    const setLang = useLang((state) => state.setLang);

    const searchParams = useSearchParams();

    const headerLinks = getHeaderLinks();
    const sections = getSections();

    useEffect(() => {
        const requestedLanguage = searchParams.get("lang");

        console.log(lang);

        if (["en", "fr"].includes(requestedLanguage)) {
            setLang(requestedLanguage);
        }
    }, [searchParams, setLang]);

    return (
        <div data-language={lang} className="resume-export flex flex-col gap-4">
            <div className="resume-page w-2xl h-full aspect-[8.5/11] m-auto bg-white rounded-md">
                <div className="flex-1 px-8 py-8">
                    <header className="mb-4 border-b border-gray-200 pb-4 flex justify-between">
                        <h1 className="text-4xl font-bold leading-none tracking-tight">
                            Victor
                            <br />
                            Aubry
                        </h1>
                        <div className="flex flex-col justify-between text-xs leading-relaxed text-puerto-rico-600 underline">
                            {headerLinks.map((link) => (
                                <a
                                    key={link.link}
                                    href={link.link}
                                    className="hover:text-puerto-rico-500">
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </header>
                    {sections[lang].slice(0, 3).map((section) => (
                        <ResumeSection section={section} />
                    ))}
                </div>
            </div>
            <div className="resume-page w-2xl h-full aspect-[8.5/11] m-auto bg-white rounded-md">
                <div className="flex-1 px-8 py-10">
                    {sections[lang].slice(3, 6).map((section) => (
                        <ResumeSection section={section} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
