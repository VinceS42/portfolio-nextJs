import React from "react";

export default function Title({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <div className={className}>
            <h2 className="text-3xl font-bold hover:text-green-500 transition-all">
                {text}
            </h2>
            <div className="w-32 h-2 bg-green-500 rounded-full"></div>
            <div className="w-32 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </div>
    );
}
