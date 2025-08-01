"use server";

import { createClient } from "@/lib/supabase/server";
import { SignupSchemaType } from "@/schemas/SignupSchema";
import { createUser } from "../db/user";

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
          rememberMe: formData.rememberMe,
        },
      },
    });
    if (error || !user) {
      console.error("Error creating user:", error);
      throw error;
    }
    const createUserResponse = await createUser(
      user?.id,
      formData.username,
    );
    if (!createUserResponse.success) {
      throw new Error(createUserResponse.message);
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
