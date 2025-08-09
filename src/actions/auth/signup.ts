"use server";

import { createClient } from "@/lib/supabase/server";
import { SignupSchemaType } from "@/schemas/SignupSchema";

export const signUp = async (formData: SignupSchemaType) => {
  try {
    const client = await createClient();
    const {
      error,
      data: { user },
    } = await client.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          displayName: formData.username,
        },
      },
    });
    if (error || !user) {
      console.error("Error creating user:", error);
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
