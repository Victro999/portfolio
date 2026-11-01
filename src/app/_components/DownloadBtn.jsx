'use client'

import React from "react";
import { useLang } from "../_stores/Stores";

const DownloadBtn = ({content}) => {
    const lang = useLang((state) => state.lang);

    const handleDownloadPdf = async () => {
        window.open(`/resume/resume-${lang}.pdf`, "_blank");
    };

    return <button className="bg-puerto-rico-600 hover:bg-gray-50 text-gray-50 hover:text-puerto-rico-600 border py-1 px-2 rounded-sm hover:shadow-md transition-all" onClick={handleDownloadPdf}>{content[lang]}</button>;
};

export default DownloadBtn;
