import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Office BGM",
    description:
        "Office BGM offers a variety of background music tailored for office environments, aiming to enhance focus and productivity. Choose from different genres to create the perfect atmosphere for your work.",
    manifest: "/manifest.json",
    icons: [
        { rel: "icon", url: "/icons/ios/16.png", sizes: "16x16" },
        { rel: "icon", url: "/icons/ios/32.png", sizes: "32x32" },
        { rel: "icon", url: "/icons/ios/64.png", sizes: "64x64" },
        { rel: "icon", url: "/icons/ios/128.png", sizes: "128x128" },
        { rel: "icon", url: "/icons/ios/256.png", sizes: "256x256" },
        { rel: "icon", url: "/icons/android/android-launchericon-48-48.png", sizes: "48x48" },
        { rel: "icon", url: "/icons/android/android-launchericon-72-72.png", sizes: "72x72" },
        { rel: "icon", url: "/icons/android/android-launchericon-96-96.png", sizes: "96x96" },
        { rel: "icon", url: "/icons/android/android-launchericon-144-144.png", sizes: "144x144" },
        { rel: "icon", url: "/icons/android/android-launchericon-192-192.png", sizes: "192x192" },
        { rel: "icon", url: "/icons/android/android-launchericon-512-512.png", sizes: "512x512" },
        { rel: "apple-touch-icon", url: "/icons/ios/180.png", sizes: "180x180" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
