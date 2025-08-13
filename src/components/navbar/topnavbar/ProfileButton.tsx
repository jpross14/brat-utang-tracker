"use client";
// import { useAutoCloseDropdown } from "@/hooks/useAutoCloseDropDown";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { example_user } from "@/constants/sample_data";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface Props {
  menuItems: MenuItem[];
}

export default function ProfileButton({ menuItems }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group glass flex h-10 w-20 items-center space-x-2 self-center rounded-4xl pl-2 transition-all hover:not-active:scale-105 focus:outline-none active:brightness-75 md:w-64 md:pl-6">
          <ChevronDown
            size={27}
            strokeWidth={2.5}
            className="mt-1 hidden blur-[0.75px] transition-transform duration-200 group-hover:not-group-active:stroke-[#FF8829] group-data-[state=open]:rotate-180 md:inline-block"
          />
          <div className="glass flex size-8 items-center justify-center rounded-[50%] group-hover:bg-[#FF8829]/50">
            <Image
              src="/assets/julia-apples.png"
              alt="bratco logo"
              width={48}
              height={48}
              className="size-7 rounded-[50%]"
            />
          </div>
          <span className="hidden text-xl blur-[0.75px] group-hover:not-group-active:text-[#FF8829] md:inline-block">
            {example_user.display_name}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="glass mt-5 flex h-56 w-75 flex-col overflow-hidden rounded-4xl p-3">
        <DropdownMenuLabel className="flex pl-2">
          <div className="glass flex size-20 items-center justify-center rounded-[50%]">
            <Image
              src="/assets/julia-apples.png"
              alt="bratco logo"
              width={48}
              height={48}
              className="size-18 rounded-[50%]"
            />
          </div>

          <div className="flex flex-col pt-2 pl-4 *:blur-[0.75px]">
            <span className="text-3xl font-bold">
              {example_user.display_name}
            </span>
            <h5 className="text-base">@ {example_user.username}</h5>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {menuItems.map((item) => (
          <DropdownMenuItem
            key={item.label}
            className="flex w-[50%] pl-2 text-sm blur-[0.6px] transition-all hover:scale-103 hover:not-active:text-[#FF8829]"
          >
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
  // <DropdownMenuItem>
  //     <Link key={item.label} href={item.href}>
  //         {item.label}
  //     </Link>
  // </DropdownMenuItem>
  // const { isOpen, setIsOpen, ref } = useAutoCloseDropdown(initialOpen);

  // return (
  //     <div ref={ref} className="self-center">
  //         <button className="group glass flex w-20 md:w-54 h-10 space-x-2 items-center rounded-4xl pl-2 md:pl-6 hover:not-active:scale-105 transition-all active:brightness-75 cursor-pointer"
  //             onClick={() => setIsOpen(!isOpen)}
  //         >
  //             {isOpen ? (
  //             <ChevronUp
  //                 size={27}
  //                 strokeWidth={2.5}
  //                 className="mt-1 blur-[0.75px] group-hover:not-group-active:stroke-[#FF8829] hidden md:inline-block"
  //             />
  //             ):(
  //             <ChevronDown
  //                 size={27}
  //                 strokeWidth={2.5}
  //                 className="mt-1 blur-[0.75px] group-hover:not-group-active:stroke-[#FF8829] hidden md:inline-block"
  //             />
  //             )}

  //             <div className="glass flex size-8 rounded-[50%] justify-center items-center">
  //             <Image
  //                 src="/assets/julia-apples.png"
  //                 alt="bratco logo"
  //                 width={48}
  //                 height={48}
  //                 className="size-7 rounded-[50%]"
  //             />
  //             </div>
  //             <span className="blur-[0.75px] text-xl group-hover:not-group-active:text-[#FF8829] hidden md:inline-block">
  //             julia apples
  //             </span>
  //         </button>

  //         {isOpen && <ProfileDropDown menuItems={menuItems}/>}
  //     </div>
  // );
}
