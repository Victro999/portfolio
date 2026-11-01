"use client";

import React, { Suspense } from "react";
import DownloadBtn from "../_components/DownloadBtn";
import Title from "../_components/Title";
import Resume from "../_components/Resume";

const ResumePage = () => {
    return (
        <div className="my-12 grow">
            <Title content={{ en: "Resume", fr: "CV" }}></Title>
            <div className="w-full flex justify-center gap-2 p-4">
                <DownloadBtn content={{ fr: "Télécharger", en: "Download" }} />
                <DownloadBtn
                    content={{ fr: "Ouvrir", en: "Open" }}
                    open={true}
                />
            </div>
            <Suspense fallback={<div>Loading resume details...</div>}>
                <Resume />
            </Suspense>
        </div>
    );
};

export default ResumePage;
