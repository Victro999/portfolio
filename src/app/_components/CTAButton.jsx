"use client";
import Link from "next/link";
import { useLang } from "../_stores/Stores";

const CTAButton = ({ href, content, className }) => {
    const lang = useLang((state) => state.lang);

    return (
        <Link
            href={href}
            className="bg-turquoise hover:bg-gray-50 text-gray-50 hover:text-turquoise border py-1 px-2 rounded-sm hover:shadow-md transition-all">
            {content[lang]}
        </Link>
    );
};

export default CTAButton;
