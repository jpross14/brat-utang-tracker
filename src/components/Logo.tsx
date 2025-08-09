import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`${className} flex items-center gap-2 text-white`}>
      <Image alt="logo" src={"/logo.png"} width={40} height={40} />
      <span className="text-3xl">BRATCO</span>
    </div>
  );
};

export default Logo;
