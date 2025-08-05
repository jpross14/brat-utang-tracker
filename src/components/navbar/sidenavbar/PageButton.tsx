import { ChevronRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  icon: LucideIcon; // The actual icon component
  href: string;
}

export default function PageButton({ name, icon: Icon, href }: Props) {
    const pathname = usePathname();

    return (
        <Link className={`group flex h-10 w-40 p-1 ml-4 my-0.5 items-center *:blur-[0.75px] rounded-2xl transition-all 
            ${pathname === href ? "bg-[#8ACE00]/60 shadow-soft-shine" : 
            "hover:bg-white/15 hover:backdrop-blur-xs hover:not-active:scale-105 hover:shadow-soft-shine"} `}
            href={href}
        >
            <ChevronRight className={`${pathname === href ? "opacity-100" : "opacity-0"}`}/>
            <Icon
                size={24}
                strokeWidth={2}
                className={`${pathname === href ? "" : "group-hover:not-group-active:stroke-[#FF8829]"} mr-2`}
            />
            <span className={`${pathname === href ? "" : "group-hover:not-group-active:text-[#FF8829]"} text-2xl`}>
                {name}
            </span>
        </Link>
    );
}