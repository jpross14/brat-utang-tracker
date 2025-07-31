import {z} from "zod/v4";
export const SignupSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
    rememberMe: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });
export type SignupSchemaType = z.infer<typeof SignupSchema>;
