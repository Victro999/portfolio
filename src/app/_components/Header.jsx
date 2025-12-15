"use client";
import React from "react";
import { useLang } from "../_stores/Stores";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const lang = useLang((state) => state.lang);
    const setLang = useLang((state) => state.setLang);

    const currentPage = usePathname();

    return (
        <header
            className="hidden md:block sticky top-0 py-4 bg-gray-50 border-b border-gray-900 z-10">
            <nav>
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Link className="text-xs" href="/">
                            Victor Aubry
                        </Link>
                        <p className="text-base font-bold">
                            {lang == "fr" ? "Dev & Artiste" : "Dev & Artist"}
                        </p>
                    </div>
                    <div className="flex items-center gap-6 text-xs">
                        <div className="flex gap-4">
                            <Link
                                className={`hover:underline ${
                                    currentPage == "/projects" && "underline"
                                }`}
                                href={"/projects"}>
                                {lang == "fr" ? "Projets" : "Projects"}
                            </Link>
                            <Link
                                className={`hover:underline ${
                                    currentPage == "/about" && "underline"
                                }`}
                                href={"/about"}>
                                {lang == "fr" ? "À propos" : "About"}
                            </Link>
                        </div>
                        <div className="h-6 border-l border-gray-900"></div>
                        <button
                            className="text-base text-end font-bold w-6"
                            onClick={() =>
                                setLang(lang === "fr" ? "en" : "fr")
                            }>
                            {lang === "fr" ? "EN" : "FR"}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
