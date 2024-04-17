import { title } from "process";
import React from "react";
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiPrisma,
    SiReact,
    SiSupabase,
    SiSymfony,
    SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
    const projects = [
        {
            title: "Clone AirBnB",
            tech: [
                SiReact,
                SiNextdotjs,
                SiPrisma,
                SiSupabase,
                SiTailwindcss,
            ],
            link: "https://clone-airbnb-rho.vercel.app/",
            cover: "/airbnb/airbnb.png",
            background: "bg-indigo-500",
        },
        {
            title: "Projet BTS",
            tech: [SiReact, SiNextdotjs, SiSupabase, SiTailwindcss],
            link: "",
            cover: "/projet_bts/no-picture.jpg",
            background: "bg-green-500",
        },
        {
            title: "Ancien Portfolio",
            tech: [SiHtml5, SiCss3, SiJavascript],
            link: "https://vincent-portfolio.projets.garage404.com/",
            cover: "/old_portfolio/oldPorfolio1.png",
            background: "bg-yellow-500",
        },
        {
            title: "Luxury Service",
            tech: [SiHtml5, SiCss3, SiJavascript, SiSymfony],
            link: "https://vincent-luxury.projets.garage404.com/",
            cover: "/luxury/Luxury2.jpg",
            background: "bg-indigo-500",
        },
        {
            title: "Slide Animée",
            tech: [SiHtml5, SiCss3, SiJavascript],
            link: "https://vincent-slide-animated.projets.garage404.com/",
            cover: "/slide_animated/slide_animated1.png",
            background: "bg-green-500",
        },
    ];
    return (
        <div className="py-10 p-5 sm:p-0">
            <Title
                text="Projets 🎨"
                className="flex flex-col items-center justify-center rotate-6"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, idx) => {
                    return (
                        <Link href={project.link} key={idx}>
                            <div
                                className={cn(
                                    "p-5 rounded-md",
                                    project.background
                                )}
                            >
                                <DirectionAwareHover
                                    imageUrl={project.cover}
                                    className="w-full space-y-5 cursor-pointer"
                                >
                                    <div className="space-y-5">
                                        <h1 className="text-2xl font-bold">
                                            {project.title}
                                        </h1>
                                        <div className="flex items-center gap-5">
                                            {project.tech.map((Icon, idx) => {
                                                return (
                                                    <Icon
                                                        className="w-8 h-8"
                                                        key={idx}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
