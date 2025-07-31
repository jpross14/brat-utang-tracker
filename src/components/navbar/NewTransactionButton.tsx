import { Plus } from "lucide-react";

export default function NewTransactionButton() {
   return (
      <button className="group flex w-32 h-16 bg-white/75 backdrop-blur-xs shadow-soft-shine rounded-2xl space-x-3 p-3 ml-5 my-10 active:brightness-75 hover:not-active:scale-105 transition-all">
         <div className="flex h-10 w-10 bg-[#8ACE00]/75 group-hover:not-group-active:bg-[#FF8829]/75 backdrop-blur-xs shadow-soft rounded-lg justify-center items-center">
            <Plus size={36} strokeWidth={3} className="stroke-black group-hover:not-group-active:stroke-white blur-[1px]"/>
         </div>
         <span className="text-2xl font-semibold pt-0.5 blur-[1px] group-hover:not-group-active:text-[#FF8829]">
            new
         </span>
      </button>
   );
}