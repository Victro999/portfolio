'use client'

import React, { useEffect } from "react";
import { getHeaderLinks, getSections } from "../_data/resume";
import ResumeSection from "../_components/ResumeSection"
import DownloadBtn from "../_components/DownloadBtn"
import { useLang } from "../_stores/Stores";
import Title from "../_components/Title";
import { useSearchParams } from "next/navigation";

const Resume = () => {
    const headerLinks = getHeaderLinks();
    const sections = getSections();

    const lang = useLang((state) => state.lang);
    const setLang = useLang((state) => state.setLang);

    const searchParams = useSearchParams();

    useEffect(() => {
        const requestedLanguage = searchParams.get("lang");

        console.log(lang);

        if (["en", "fr"].includes(requestedLanguage)) {
            setLang(requestedLanguage);
        }
    }, [searchParams, setLang]);

    return (
        <div className="my-12 grow">
            <Title content={{en: "Resume", fr: "CV"}}></Title>
            <div className="w-full flex justify-center gap-2 p-4">
                <DownloadBtn content={{fr: "Télécharger", en: "Download"}}/>
                <DownloadBtn content={{fr: "Ouvrir", en: "Open"}} open={true}/>
            </div>
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
                        {sections[lang].slice(0, 3).map((section) => <ResumeSection section={section}/>)}
                    </div>
                </div>
                <div className="resume-page w-2xl h-full aspect-[8.5/11] m-auto bg-white rounded-md">
                    <div className="flex-1 px-8 py-10">
                        {sections[lang].slice(3, 6).map((section) => <ResumeSection section={section}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
