import SideNavBar from "@/components/navbar/sidenavbar/SideNavBar";
import TopNavBar from "@/components/navbar/topnavbar/TopNavBar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import BgWrapper from "@/components/wrappers/bgWrapper"; // or wherever you saved it

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?not-logged-in=true");

  return (
    <BgWrapper>
      <SideNavBar />
      <section className="flex flex-col grow min-w-1/3">
        <TopNavBar />
        {children}
      </section>
    </BgWrapper>
  );
}
