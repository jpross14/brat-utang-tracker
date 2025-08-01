import { ChevronRight, type LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon: LucideIcon; // The actual icon component
}

export default function PageButton({ name, icon: Icon }: Props) {
   return (
      <button className="group flex h-10 w-40 p-1 ml-4 my-0.5 items-center *:blur-[0.75px] rounded-2xl 
         hover:bg-white/15 hover:backdrop-blur-xs hover:not-active:scale-105 transition-all 
         active:bg-[#8ACE00]/60 hover:shadow-soft-shine"
      >
         <ChevronRight className="opacity-0 group-active:opacity-100"/>
         <Icon
            size={24}
            strokeWidth={2}
            className="mr-2 group-hover:not-group-active:stroke-[#FF8829]"
         />
         <span className="text-2xl group-hover:not-group-active:text-[#FF8829]">{name}</span>
      </button>
   );
}