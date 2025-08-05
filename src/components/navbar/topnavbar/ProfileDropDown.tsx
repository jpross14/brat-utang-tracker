import React from "react";
import Image from "next/image";
import Link from "next/link";
import { example_user } from "@/constants/sample_data";

type MenuItem = {
    label: string;
    href: string;
};

interface Props {
    menuItems: MenuItem[];
}

export default function ProfileDropDown({ menuItems }: Props) {
	return (
		<div className="flex flex-col glass h-51 w-75 absolute overflow-hidden top-16 right-15 rounded-4xl p-3">
			<section className="flex pl-2">
			<div className="glass flex size-20 rounded-[50%] justify-center items-center">
				<Image
					src="/assets/julia-apples.png"
					alt="bratco logo"
					width={48}
					height={48}
					className="size-18 rounded-[50%]"
				/>
			</div>

			<div className="flex flex-col *:blur-[0.75px] pl-4 pt-2">
				<span className="text-2xl font-bold">{example_user.display_name}</span>
				<h5>@{example_user.username}</h5>
			</div>
			</section>

			<div className="h-0.25 w-full bg-black/15 mt-3 mb-2"/>

			<section className="*:blur-[0.5px] pl-3">
			{menuItems.map((item) => (
			<Link key={item.label} href={item.href}>
				<button className="flex hover:not-active:text-[#FF8829] pl-1 text-sm w-[50%] hover:scale-103 transition-all cursor-pointer my-1">
				{item.label}
				</button>
			</Link>
			))}
			</section>
		</div>
	);
}