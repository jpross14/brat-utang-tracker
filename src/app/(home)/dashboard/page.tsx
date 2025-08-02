"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import React from "react";

const DashboardPage = () => {
  const handleLogout = async () => {
    const client = createClient();
    const { error } = await client.auth.signOut();
    if (error) {
      console.error("Logout failed:", error);
    } else {
      console.log("Logged out successfully");
    }
  };

  return (
    <main className={`relative h-screen justify-center items-center p-7`}>
      <div className="glass blur-[1px] w-fit h-18 text-5xl font-medium flex items-center rounded-[1.75rem] px-5">
        <span className="text-center">welcome, julia apples</span>
      </div>
      <div>
        <Button onClick={handleLogout}>
          <p>Log out</p>
        </Button>
      </div>
    </main>
  );
};

export default DashboardPage;
