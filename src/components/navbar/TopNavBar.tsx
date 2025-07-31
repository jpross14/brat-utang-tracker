import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function TopNavBar() {
   return (
      <nav className="z-1 flex grow h-14 min-w-1/3 bg-white/50 backdrop-blur-xs shadow-reg justify-between pl-6 pr-24">
         <section className="flex w-full">
            <Image
            src="/assets/brat-apple.svg"
            alt="bratco logo"
            width={48}
            height={48}
            className=""
            />
            <span className="text-2xl font-bold pt-3.5 blur-[1px]">BRATCO</span>
         </section>

         <section className="group glass flex w-56 h-10 space-x-1.5 justify-center self-center items-center rounded-4xl px-2 hover:not-active:scale-105 transition-all active:brightness-75 cursor-pointer">
            <ChevronDown size={27} strokeWidth={2.5} className="mt-1 blur-[0.75px] group-hover:not-group-active:stroke-[#FF8829]"/>
            <div className="glass flex size-8 rounded-2xl justify-center items-center">
               <Image
                  src="/assets/julia-apples.png"
                  alt="bratco logo"
                  width={48}
                  height={48}
                  className="size-7 rounded-[14px]"
               />
            </div>
            <span className="blur-[0.75px] text-xl group-hover:not-group-active:text-[#FF8829]">julia apples</span>
         </section>
      </nav>
   );
}