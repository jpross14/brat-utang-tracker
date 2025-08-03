import ProfilePage from "@/components/profile/ProfilePage";
import { createClient } from "@/lib/supabase/server";
import React from "react";

export default async function Profile() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user</div>;
  }

  return <ProfilePage user={user} credits={10} debts={5} friends={15} />;
}
