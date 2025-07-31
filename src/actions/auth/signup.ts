"use server";

import { createClient } from "@/lib/supabase/server";
import { SignupSchemaType } from "@/schemas/SignupSchema";

export const createUser = async (formData: SignupSchemaType) => {
  try {
    const client = await createClient();
    const { error } = await client.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      console.error("Error creating user:", error);
      throw error
    }
    return { success: true, message: "" };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
};
