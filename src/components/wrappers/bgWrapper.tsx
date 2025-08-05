"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const bgImage = [
    {page: "/dashboard", img: "/assets/dashboard.png", alt: "dashboard-bg-image"},
    {page: "/debt", img: "/assets/debt.png", alt: "debt-bg-image"},
    {page: "/credit", img: "/assets/credit.png", alt: "credit-bg-image"},
    {page: "/friends", img: "/assets/friends.png", alt: "friends-bg-image"},
    {page: "/updates", img: "/assets/updates.png", alt: "updates-bg-image"},
    {page: "/profile", img: "/assets/profile.png", alt: "profile-bg-image"}
];

export default function BgWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const match = bgImage.find(bg => pathname.startsWith(bg.page)) || {
    img: "/assets/dashboard.png",
    alt: "default-bg-image"
  };

  return (
    <main>
      <Image
        src={match.img}
        alt={match.alt}
        width={1920}
        height={919}
        className="absolute top-0 left-0 h-full w-full object-cover mix-blend-soft-light z-0"
      />
      <div className="relative flex h-screen w-screen z-10">
        {children}
      </div>
    </main>
  );
}
