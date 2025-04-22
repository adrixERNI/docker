import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Alert from "@/components/ui/Alert";
import ThemeToggler from "@/components/ui/ThemeToggler";
import MainContainer from "@/containers/MainContainer";
import GoogleAuthProvider from "@/providers/GoogleAuthProvider";

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
        <GoogleAuthProvider>
            <html lang="en" className="">
                <body className={`${interSansSerif.variable} antialiased`}>
                    <MainContainer>
                        {children}
                        <ThemeToggler />
                        <Alert />
                    </MainContainer>
                </body>
            </html>
        </GoogleAuthProvider>
    );
}
