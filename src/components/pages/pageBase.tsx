import React from 'react'

interface Props {
    title: string;
    children?: React.ReactNode;
}

export default function PageBase({title, children}: Props) {
    return (
        <main className={`relative h-screen justify-center items-center p-7`}>
        <div className="glass w-fit h-18 text-5xl font-medium flex items-center rounded-[1.75rem] px-5">
            <span className="text-center blur-[1px]">{title}</span>
            {children}
        </div>
    </main>
    );
};