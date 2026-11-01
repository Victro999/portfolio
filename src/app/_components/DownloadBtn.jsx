'use client'

import React from "react";
import { useLang } from "../_stores/Stores";

const DownloadBtn = ({open, content}) => {
    const lang = useLang((state) => state.lang);

    const handleDownloadPdf = async () => {
        const response = await fetch(`/api/resume?lang=${lang}`);

        if (!response.ok) {
            throw new Error("Failed to generate PDF");
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.pdf";
        link.click();

        URL.revokeObjectURL(url);
    };

    const handleViewPdf = async () => {
        const newWindow = window.open("", "_blank");

        try {
            const response = await fetch(`/api/resume?lang=${lang}`);

            if (!response.ok) {
                throw new Error("Failed to generate PDF");
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            newWindow.location.href = url;
        } catch (error) {
            newWindow.close();
            console.error(error);
        }
    };

    return <button className="bg-puerto-rico-600 hover:bg-gray-50 text-gray-50 hover:text-puerto-rico-600 border py-1 px-2 rounded-sm hover:shadow-md transition-all" onClick={open? handleViewPdf : handleDownloadPdf}>{content[lang]}</button>;
};

export default DownloadBtn;
