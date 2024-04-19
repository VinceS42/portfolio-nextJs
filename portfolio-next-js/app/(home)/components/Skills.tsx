"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { text } from "stream/consumers";
import {
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiReact,
    SiSupabase,
    SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "PHP",
            Icon: SiPhp,
        },
        {
            text: "Supabase",
            Icon: SiSupabase,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Express",
            Icon: SiExpress,
        },
        {
            text: "MongoDB",
            Icon: SiMongodb,
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title
                text="Skills 🔪"
                className="flex flex-col items-center justify-center -rotate-6"
            />
            <HoverEffect items={skills} />
        </div>
    );
}
