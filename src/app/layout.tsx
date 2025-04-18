import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggler from "@/components/ui/ThemeToggler";

const interSansSerif = Inter({
    variable: "--font-inter-sans-serif",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
    title: "LinkedOut",
    description: ""
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="">
            <body className={`${interSansSerif.variable} antialiased`}>
                {children}
                <ThemeToggler />
            </body>
        </html>
    );
}
