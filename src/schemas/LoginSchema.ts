import { z } from "zod/v4";
export const LoginSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),

  rememberMe: z.boolean(),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
