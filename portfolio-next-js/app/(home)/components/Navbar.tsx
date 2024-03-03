import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Navbar() {
    const socials = [
        {
            link: "https://www.linkedin.com/in/vincent-fayon/",
            label: "linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/VinceS42",
            label: "github",
            Icon: SiGithub,
        },
    ];

    return (
        <nav className="py-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                Fayon Vincent 🥰
            </h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;

                    return (
                        <Link
                            href={social.link}
                            key={index}
                            aria-label={social.label}
                        >
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
