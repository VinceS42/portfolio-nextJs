import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-next-js-azure.vercel.app/"),

    title: " Portfolio FAYON Vincent",
    description:
        "Basé à Saint-Étienne, je suis un jeune développeur passionné qui a découvert les joies et les plaisirs de coder sur React. Actuellement, je m'intéresse également de près à Next.js. Je suis enthousiaste à l'idée de continuer à développer mes compétences dans ce domaine passionnant !",
    openGraph: {
        title: "Portfolio de FAYON Vincent",
        description:
            "Basé à Saint-Étienne, je suis un jeune développeur passionné qui a découvert les joies et les plaisirs de coder sur React. Actuellement, je m'intéresse également de près à Next.js. Je suis enthousiaste à l'idée de continuer à développer mes compétences dans ce domaine passionnant !",
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
