// import Link from "next/link";
import Image from "next/image";
import { Archivo_Narrow } from "next/font/google";
import SideNavBar from "@/components/navbar/SideNavBar";
import TopNavBar from "@/components/navbar/TopNavBar";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

// h-[647px] w-[1375px]
export default function Home() {
  return (
   //  <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   //    <Link href={"/login"}></Link>
   //    <Link href={"/signup"}></Link>
   //  </div>
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
}
