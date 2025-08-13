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
    <Link
      className={`group my-0.5 ml-4 flex h-10 w-40 items-center rounded-2xl p-1 transition-all *:blur-[0.75px] ${
        pathname === href
          ? "shadow-soft-shine bg-[#8ACE00]/60"
          : "hover:shadow-soft-shine hover:bg-white/15 hover:backdrop-blur-xs hover:not-active:scale-105"
      } `}
      href={href}
    >
      <ChevronRight
        className={`${pathname === href ? "opacity-100" : "opacity-0"}`}
      />
      <Icon
        size={24}
        strokeWidth={2}
        className={`${pathname === href ? "" : "group-hover:stroke-[#FF8829]"} mr-2`}
      />
      <span
        className={`${pathname === href ? "" : "group-hover:text-[#FF8829]"} text-2xl`}
      >
        {name}
      </span>
    </Link>
  );
}
