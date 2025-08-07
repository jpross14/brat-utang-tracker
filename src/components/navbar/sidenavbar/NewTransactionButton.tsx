import { HandCoins, PiggyBank, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NewTransactionButton() {
   return (
    <DropdownMenu>
        <DropdownMenuTrigger className="group flex w-32 h-16 items-center pl-4 glass rounded-2xl space-x-3 ml-7 mt-10 shadow-reg hover:bg-white/75 hover:not-active:scale-105 transition-all focus:outline-none">
            <div className="flex size-10 bg-[#8ACE00]/75 backdrop-blur-xs shadow-soft rounded-md justify-center items-center group-hover:not-group-active:bg-[#FF8829]/75">
                <Plus size={34} strokeWidth={3} className="stroke-black group-hover:not-group-active:stroke-white blur-[1px]"/>
            </div>
            <span className="text-2xl font-semibold blur-[0.75px] group-hover:not-group-active:text-[#FF8829]">
                new
            </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="absolute top-3 w-48 h-24 *:text-lg *:blur-[0.75px] p-3">
            <DropdownMenuItem className="flex group hover:scale-103 transition-all">
                <HandCoins size={48} strokeWidth={2} stroke="#000000" className="group-hover:stroke-[#FF8829]"/>
                <span className="group-hover:text-[#FF8829]">
                    debt transaction
                </span>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex group hover:scale-103 transition-all">
                <PiggyBank size={48} strokeWidth={2} stroke="#000000" className="group-hover:stroke-[#FF8829]"/>
                <span className="group-hover:text-[#FF8829]">
                    credit transaction
                </span>
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