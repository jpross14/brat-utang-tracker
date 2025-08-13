import { HandCoins, PiggyBank, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NewTransactionButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group glass shadow-reg mt-10 ml-7 flex h-16 w-32 items-center space-x-3 rounded-2xl pl-4 transition-all hover:bg-white/75 hover:not-active:scale-105 focus:outline-none">
        <div className="shadow-soft flex size-10 items-center justify-center rounded-md bg-[#8ACE00]/75 backdrop-blur-xs group-hover:not-group-active:bg-[#FF8829]/75">
          <Plus
            size={34}
            strokeWidth={3}
            className="stroke-black blur-[1px] group-hover:not-group-active:stroke-white"
          />
        </div>
        <span className="text-2xl font-semibold blur-[0.75px] group-hover:not-group-active:text-[#FF8829]">
          new
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="absolute top-3 h-24 w-48 p-3 *:text-lg *:blur-[0.75px]">
        <DropdownMenuItem className="group flex transition-all hover:scale-103">
          <HandCoins
            size={48}
            strokeWidth={2}
            stroke="#000000"
            className="group-hover:stroke-[#FF8829]"
          />
          <span className="group-hover:text-[#FF8829]">debt transaction</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="group flex transition-all hover:scale-103">
          <PiggyBank
            size={48}
            strokeWidth={2}
            stroke="#000000"
            className="group-hover:stroke-[#FF8829]"
          />
          <span className="group-hover:text-[#FF8829]">credit transaction</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

//   <button className="group flex w-30 h-15 bg-white/75 backdrop-blur-xs shadow-soft-shine rounded-2xl space-x-3 p-3 ml-7 mt-10 active:brightness-75 hover:not-active:scale-105 transition-all cursor-pointer">
//      <div className="flex size-9 bg-[#8ACE00]/75 backdrop-blur-xs shadow-soft rounded-md justify-center items-center group-hover:not-group-active:bg-[#FF8829]/75">
//         <Plus size={34} strokeWidth={3} className="stroke-black group-hover:not-group-active:stroke-white blur-[1px]"/>
//      </div>
//      <span className="text-xl font-semibold pt-1 blur-[0.75px] group-hover:not-group-active:text-[#FF8829]">
//         new
//      </span>
//   </button>
