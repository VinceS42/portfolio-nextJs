import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="min-h-[60vh] flex items-center justify-between">
            <div className="space-y-10">
                <h2 className="text-4xl lg:text-7xl font-bold">
                    Bienvenue sur mon portfolio 🖐😊
                    <br />{" "}
                    <span className="underline underline-offset-8 decoration-green-500">
                        {"Vincent Fayon à votre service !"}
                    </span>
                </h2>
                <p className="md:w-96 text-lg text-gray-300">
                    {
                        "Basé sur Saint-Etienne, je suis un petit jeune développeur qui a découvert les joies et les plaisir de coder sur React!"
                    }
                </p>
                <Link
                    href={"mailto:v.fayon.pro@gmail.com"}
                    className="inline-block"
                >
                    <div>
                        <h2 className="text-3xl font-bold hover:text-green-500 transition-all">Contactez moi 📬</h2>
                        <div className="w-full h-2 bg-green-500 rounded-full"></div>
                        <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                    </div>
                </Link>
            </div>
            <div>
                <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
