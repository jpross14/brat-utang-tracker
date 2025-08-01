import React from 'react'
import Image from "next/image";
import { Archivo_Narrow } from "next/font/google";
import SideNavBar from "@/components/navbar/sidenavbar/SideNavBar";
import TopNavBar from "@/components/navbar/topnavbar/TopNavBar";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export default function DashboardPage() {
  return (
    <main className={`relative h-screen w-screen ${archivoNarrow.className}`}>
      <Image 
         src="/assets/dashboard.png"
         alt="dashboard-bg-image"
         width={1920}
         height={919}
         className="absolute top-0 left-0 h-full w-full object-cover mix-blend-soft-light z-0"
      />

      <div className="relative z-10 flex h-full w-full">
         <SideNavBar />
         <TopNavBar />
      </div>
   </main>
  );
};
