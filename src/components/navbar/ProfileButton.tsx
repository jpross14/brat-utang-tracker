"use client";
import { useAutoCloseDropdown } from "@/hooks/useAutoCloseDropDown";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import ProfileDropDown from "./ProfileDropDown";

interface Props {
  initialOpen: boolean;
}

const menuItems = [
   { label: "Edit Profile", href: "" },
   { label: "Reset Password", href: "" },
   { label: "Log Out", href: "" }
];

export default function ProfileButton({initialOpen = false}: Props) {
   const { isOpen, setIsOpen, ref } = useAutoCloseDropdown(initialOpen);
   
   return (
      <div ref={ref} className="self-center">
         <button className="group glass flex w-54 h-10 space-x-2 items-center rounded-4xl pl-6 hover:not-active:scale-105 transition-all active:brightness-75 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
         >
            {isOpen ? (
               <ChevronUp 
                  size={27} 
                  strokeWidth={2.5} 
                  className="mt-1 blur-[0.75px] group-hover:not-group-active:stroke-[#FF8829]"
               />
            ):(
               <ChevronDown 
                  size={27} 
                  strokeWidth={2.5} 
                  className="mt-1 blur-[0.75px] group-hover:not-group-active:stroke-[#FF8829]"
               />
            )}

            <div className="glass flex size-8 rounded-[50%] justify-center items-center">
               <Image
                  src="/assets/julia-apples.png"
                  alt="bratco logo"
                  width={48}
                  height={48}
                  className="size-7 rounded-[50%]"
               />
            </div>
            <span className="blur-[0.75px] text-xl group-hover:not-group-active:text-[#FF8829]">julia apples</span>
         </button>

         {/* {isOpen && <ServiceDropDown menuItems={menuItems} />} */}
         {isOpen && <ProfileDropDown menuItems={menuItems}/>}
      </div>
   );
}
