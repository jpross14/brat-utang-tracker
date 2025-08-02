"use server";

import { createClient } from "@/lib/supabase/server";

export const createUser = async (id: string, username: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.from("Users").insert({
      id,
      username,
    });
    if (error) {
      console.error("Error creating user in Users table:", error);
      throw error;
    }
    return { success: true, message: "" };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
