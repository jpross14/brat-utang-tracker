import NewTransactionButton from "./NewTransactionButton";
import PageButtons from "./PageButtons";

export default function SideNavBar() {
   return (
      <nav className="z-2 flex flex-col min-h-screen min-w-50 pt-6 bg-white/50 backdrop-blur-xs shadow-reg">
         <span className="px-6 text-3xl text-left blur-[1px]">utang is brat</span>
         <NewTransactionButton/>
         <PageButtons/>
      </nav>
   );
}

