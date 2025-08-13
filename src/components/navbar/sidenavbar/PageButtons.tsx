"use client";
import {
  BanknoteArrowDown,
  Bell,
  CreditCard,
  House,
  User,
  Users,
} from "lucide-react";
import PageButton from "./PageButton";

const buttons = [
  { name: "home", icon: House, href: "/dashboard" },
  { name: "debt", icon: BanknoteArrowDown, href: "/debt" },
  { name: "credit", icon: CreditCard, href: "/credit" },
  { name: "people", icon: Users, href: "/people" },
];

export default function PageButtons() {
  return (
    <section className="justify-items-evenly my-10 flex flex-col *:cursor-pointer">
      {buttons.map(({ name, icon, href }, idx) => (
        <PageButton key={idx} name={name} icon={icon} href={href} />
      ))}
    </section>
  );
}
