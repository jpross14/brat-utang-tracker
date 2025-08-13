import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function PageBase({ title, children }: Props) {
  return (
    <main className={`relative h-screen items-center justify-center p-7`}>
      <div className="glass flex h-18 w-fit items-center rounded-[1.75rem] px-5 text-5xl font-medium">
        <span className="text-center blur-[1px]">{title}</span>
        {children}
      </div>
    </main>
  );
}
