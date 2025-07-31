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
    <div>
      <Button onClick={handleLogout}>
        <p>Log out</p>
      </Button>
    </div>
  );
};

export default DashboardPage;
