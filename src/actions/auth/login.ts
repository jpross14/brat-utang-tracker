"use server";

import { createClient } from "@/lib/supabase/server";
import { LoginSchemaType } from "@/schemas/LoginSchema";

export const login = async (values: LoginSchemaType) => {
  try {
    const client = await createClient();
    const { data: user, error } = await client.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: "Login successful",
      user,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
    };
  }
};
