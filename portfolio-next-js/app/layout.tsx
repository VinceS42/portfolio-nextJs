import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-next-js-azure.vercel.app/"),

    title: " Portfolio FAYON Vincent",
    description:
        "Basé sur Saint-Etienne, je suis un jeune développeur qui a découvert les joies et les plaisir de coder sur React et qui découvre NextJS!",
    openGraph: {
        title: "Portfolio de FAYON Vincent",
        description:
            "Basé sur Saint-Etienne, je suis un jeune développeur qui a découvert les joies et les plaisir de coder sur React et qui découvre NextJS!",
        url: "https://portfolio-next-js-azure.vercel.app/",
        siteName: "FAYON Vincent",
        images: "/og.png",
        type: "website",
    },
    keywords: [
        "Developpeur",
        "Fayon Vincent",
        "React",
        "Next.JS",
        "NextJS",
        "JavaScript",
        "Supabase",
        "Prisma",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
