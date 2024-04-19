import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

export default function HeroSection() {
    return (
        <div className="min-h-[63vh] flex flex-col-reverse gap-14 lg:gap-0 items-center justify-between lg:flex-row animate-move-up">
            <div className="space-y-10 text-center lg:text-left">
                <h2 className="text-4xl lg:text-7xl font-bold">
                    Bienvenue sur mon portfolio 🖐😊
                    <br />{" "}
                    <span className="underline underline-offset-8 decoration-green-500">
                        {"Vincent Fayon à votre service !"}
                    </span>
                </h2>
                <p className="md:w-[650px] text-lg text-gray-300">
                    Basé à Saint-Étienne, je suis un jeune développeur passionné
                    qui a découvert les joies et les plaisirs de coder sur
                    React.
                    <br />
                    Actuellement, je m'intéresse également de près à Next.js.
                    <br />
                    Je suis enthousiaste à l'idée de continuer à développer mes
                    compétences dans ce domaine passionnant !
                </p>
                <Link
                    href={"mailto:v.fayon.pro@gmail.com"}
                    className="inline-block"
                >
                    <Title text="Contactez moi 📬" />
                </Link>
            </div>
            <div className="relative pt-5 lg:pt-0">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                    <MovingBorderBtn
                        borderRadius="0.5rem"
                        className="p-4 font-semibold disabled"
                    >
                        <p>📢 Disponible</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    );
}
