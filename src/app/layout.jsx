import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { Outfit } from "next/font/google";

export const metadata = {
    title: "Victor Aubry | Portfolio",
    description: "Victor Aubry's personal portfolio website showcasing projects and skills.",
};

export const font = Outfit({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="text-[calc(1rem+0.5vw)]">
            <body className={`${font.className} text-gray-700 bg-gray-50 mx-8`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
