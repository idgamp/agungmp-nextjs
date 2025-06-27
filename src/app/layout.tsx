import type { Metadata } from "next";
import { Handjet, Pixelify_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";

const handJet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "agungmp | web developer based in Bali",
  description: "Hello I'm Agung, a web developer based in Bali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${handJet.variable} ${pixelify.variable} ${pressStart2P} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
