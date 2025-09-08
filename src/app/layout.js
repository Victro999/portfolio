import "./globals.css";
import { Outfit } from "next/font/google";

export const metadata = {
  title: "Victor Aubry | Portfolio",
  description: "Portfolio",
};

export const font = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} text-gray-900 bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
