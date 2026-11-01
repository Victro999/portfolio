import React from "react";

const ResumeSection = ({section}) => {
    return (
        <section key={section.title} className="mb-6">
            <h2 className="mb-2 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
                <span className="h-5 w-1 bg-puerto-rico-600"></span>
                {section.title}
            </h2>

            {section.entries.map((entry, index) => (
                <article
                    key={`${entry.title}-${index}`}
                    className="mb-1 last:mb-0">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-base font-bold text-gray-900">
                                {entry.title}
                            </h3>

                            {entry.organization && (
                                <p className="mt-0.5 text-sm font-medium text-puerto-rico-600">
                                    {entry.organization}
                                </p>
                            )}
                        </div>

                        {entry.date && (
                            <span className="shrink-0 pt-1 text-xs font-semibold text-gray-400">
                                {entry.date}
                            </span>
                        )}
                    </div>

                    {entry.description &&
                        (Array.isArray(entry.description) ? (
                            <ul className="mt-0 list-disc space-y-1 pl-4 text-xs leading-tight text-gray-600 marker:text-puerto-rico-600">
                                {entry.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-xs leading-relaxed text-gray-600">
                                {entry.description}
                            </p>
                        ))}
                </article>
            ))}
        </section>
    );
};

export default ResumeSection;
