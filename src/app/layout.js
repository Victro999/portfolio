import "./globals.css";
import { Viga } from "next/font/google";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export const viga = Viga({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${viga.className} text-black`}
      >
        {children}
      </body>
    </html>
  );
}
