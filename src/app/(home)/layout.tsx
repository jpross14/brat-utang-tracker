import SideNavBar from "@/components/navbar/sidenavbar/SideNavBar";
import TopNavBar from "@/components/navbar/topnavbar/TopNavBar";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?not-logged-in=true",)
  }

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
