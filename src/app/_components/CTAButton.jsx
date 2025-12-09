"use client";
import Link from "next/link";
import { useLang } from "../_stores/Stores";

const CTAButton = ({href, content}) => {
    const lang = useLang((state) => state.lang);

    return (
        <div>
            <Link
                href={href}
                className="bg-turquoise text-gray-50 py-1 px-2 rounded-sm">
                {content[lang]}
            </Link>
        </div>
    );
};

export default CTAButton;
