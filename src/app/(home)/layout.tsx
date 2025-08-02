import SideNavBar from "@/components/navbar/sidenavbar/SideNavBar";
import TopNavBar from "@/components/navbar/topnavbar/TopNavBar";
import Image from "next/image";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <main>
         <Image 
            src="/assets/dashboard.png"
            alt="dashboard-bg-image"
            width={1920}
            height={919}
            className="absolute top-0 left-0 h-full w-full object-cover mix-blend-soft-light z-0"
         />
         <div className="relative flex h-screen w-screen z-10">
            <SideNavBar />
            <section className="flex flex-col grow min-w-1/3">
               <TopNavBar />
               {children}
            </section>
         </div>
      </main>
   );
}