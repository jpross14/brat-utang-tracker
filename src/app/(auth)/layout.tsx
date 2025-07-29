import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React, { PropsWithChildren } from "react";

const AuthLayout = async ({ children }: PropsWithChildren) => {
  const supabaseClient = await createClient();
  const { data } = await supabaseClient.auth.getSession();

  if (data.session) {
    redirect("/dashboard");
  }

  return <>{children}</>;
};

export default AuthLayout;
