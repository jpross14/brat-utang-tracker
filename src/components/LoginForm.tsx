"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { login } from "@/actions/auth/login";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const LoginForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState("");

  const onSubmit = async (values: LoginSchemaType) => {
    setError(""); // Reset errors before submission
    const response = await login(values);

    if (response.success) {
      router.push("/dashboard");
    } else {
      setError(response.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-white relative z-20 flex flex-col md:gap-2 md:w-sm">
      <div className="text-center gap-2 flex flex-col">
        <h1>log in</h1>
        <p>welcome back, angel. miss you &lt;3</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Password</FormLabel>
                <div className="relative flex items-center">
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <button
                    className="absolute right-3"
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Logging In..." : "Log In"}
          </Button>
        </form>
      </Form>
      <p className="error">
        {error && <span className="text-red-500">{error}</span>}
      </p>

      <div className="flex gap-1">
        don&apos;t have a brat account?{" "}
        <Link href={"/signup"} className="font-bold  hover:underline">
          <p>Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
