"use client";
import { BanknoteArrowDown, Bell, CreditCard, House, User, Users } from "lucide-react";
import PageButton from "./PageButton";

const buttons = [
   { name: "home", icon: House, href: "/dashboard"},
   { name: "debt", icon: BanknoteArrowDown, href: "/debt"},
   { name: "credit", icon: CreditCard, href: "/credit"},
   { name: "friends", icon: Users, href: "/friends"},
   { name: "updates", icon: Bell, href: "/updates"},
   { name: "profile", icon: User, href: "/profile"}
]

export default function PageButtons() {
   return (
      <section className="flex flex-col justify-items-evenly my-8 *:cursor-pointer">
         {buttons.map(({ name, icon, href }, idx) => (
         <PageButton key={idx} name={name} icon={icon} href={href} />
         ))}
      </section>
   );
}