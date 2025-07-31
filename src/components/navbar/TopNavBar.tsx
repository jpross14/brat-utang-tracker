// import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ProfileButton from "./ProfileButton";

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

         <ProfileButton initialOpen={false} />
      </nav>
   );
}