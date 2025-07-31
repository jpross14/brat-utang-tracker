import { BanknoteArrowDown, Bell, ChevronRight, CreditCard, House, User, Users } from "lucide-react";
import PageButton from "./PageButton";

const buttons = [
   { name: "home", icon: House},
   { name: "debt", icon: BanknoteArrowDown},
   { name: "credit", icon: CreditCard},
   { name: "friends", icon: Users},
   { name: "updates", icon: Bell},
   { name: "profile", icon: User}
]

export default function PageButtons() {
   return (
      <section className="flex flex-col justify-items-evenly">
         {buttons.map(({ name, icon }, idx) => (
         <PageButton key={idx} name={name} icon={icon} />
         ))}
      </section>
   );
}