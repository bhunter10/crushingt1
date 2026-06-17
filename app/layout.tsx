import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GivebutterScript } from "@/components/GivebutterScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrushingT1 | Type 1 Diabetes Awareness",
  description:
    "CrushingT1 is a Type 1 diabetes awareness foundation in progress, sharing education, stories, videos, and responsible support opportunities."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <GivebutterScript />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
