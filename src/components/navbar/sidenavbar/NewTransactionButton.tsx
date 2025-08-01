import { Plus } from "lucide-react";

export default function NewTransactionButton() {
   return (
      <button className="group flex w-30 h-15 bg-white/75 backdrop-blur-xs shadow-soft-shine rounded-2xl space-x-3 p-3 ml-7 mt-10 active:brightness-75 hover:not-active:scale-105 transition-all cursor-pointer">
         <div className="flex size-9 bg-[#8ACE00]/75 backdrop-blur-xs shadow-soft rounded-md justify-center items-center group-hover:not-group-active:bg-[#FF8829]/75">
            <Plus size={34} strokeWidth={3} className="stroke-black group-hover:not-group-active:stroke-white blur-[1px]"/>
         </div>
         <span className="text-xl font-semibold pt-1 blur-[0.75px] group-hover:not-group-active:text-[#FF8829]">
            new
         </span>
      </button>
   );
}