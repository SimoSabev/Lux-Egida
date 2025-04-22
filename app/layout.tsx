import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lux Egida",
    description: "Your Strategic Partner in Luxury Asset Management",
    keywords: ["Yachts", "Luxury", "Luxury Yacht", "Yacht services", "Private Jets", "Luxury Private Jets", "Private Jets Services"],
    authors: [{name: "Iliana"}, {name: "Velislava"}],
    creator: "Lux Egida",
    metadataBase: new URL("https://www.luxegida.com"),
    openGraph: {
        title: "Lux Egida",
        description: "Your Strategic Partner in Luxury Asset Management",
        url: "https://www.luxegida.com",
        siteName: "Lux Egida",
        images: [
            {
                url: "/opengraph1.png",
                width: 1200,
                height: 630,
                alt: "Your Strategic Partner in Luxury Asset Management",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: "/Background_Logo (1).png",
        shortcut: "/favicon.ico",
        apple: "/Background_Logo (1).png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
