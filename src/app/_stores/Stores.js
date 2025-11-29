import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLang = create()(
    persist(
        (set, get) => ({
            lang: "fr",
            setLang: (lang) => {
                if (lang == "fr" || lang == "en") set({ lang: lang });
            },
        }),
        {
            name: "lang-storage",
        }
    )
);
