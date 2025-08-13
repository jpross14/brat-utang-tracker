// import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ProfileButton from "./ProfileButton";

const menuItems = [
  { label: "View Profile", href: "/profile" },
  { label: "Reset Password", href: "/profile" },
  { label: "Log Out", href: "/" },
];

export default function TopNavBar() {
  return (
    <nav className="shadow-reg z-1 flex h-15 justify-between bg-white/50 pr-36 pl-6 backdrop-blur-xs">
      <section className="flex w-full">
        <Image
          src="/assets/brat-apple.svg"
          alt="bratco logo"
          width={48}
          height={48}
          className=""
        />
        <span className="pt-3.5 text-2xl font-bold blur-[1px]">BRATCO</span>
      </section>

      <ProfileButton menuItems={menuItems} />
    </nav>
  );
}
