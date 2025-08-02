import type { Metadata } from "next";
import { Archivo_Narrow } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SideNavBar from "@/components/navbar/sidenavbar/SideNavBar";
import TopNavBar from "@/components/navbar/topnavbar/TopNavBar";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brat Utang Tracker",
  description:
    "brat and it's the same but it's an utang tracking website so it's not",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivoNarrow.className} antialiased bg-[#8ACE00]`}>
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
      </body>
    </html>
  );
}
