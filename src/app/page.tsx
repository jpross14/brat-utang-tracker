import Link from "next/link";
import { Archivo_Narrow } from "next/font/google";
// import SideNavBar from "@/components/navbar/SideNavBar";
// import Image from "next/image";
// import TopNavBar from "@/components/navbar/TopNavBar";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

// h-[647px] w-[1375px]
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={"/login"}></Link>
      <Link href={"/signup"}></Link>
    </div>
   //  <main className={`bg-[#8ACE00] h-screen w-screen ${archivoNarrow.className}`}>
   //    {/* <Image 
   //       src={"/assets/dashboard.png"} 
   //       alt="dashboard-bg-image" 
   //       width={1920} 
   //       height={919} 
   //       className="mix-blend-soft-light h-screen w-screen object-cover"
   //    /> */}

   //    <div className="flex w-screen h-screen">
   //       <SideNavBar/>
   //       <TopNavBar/>
   //    </div>

   //  </main>
  );
}
