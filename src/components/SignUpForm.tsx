"use client";

import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { createUser } from "@/actions/auth/signup";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { SignupSchema, SignupSchemaType } from "@/schemas/SignupSchema";
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

const SignupForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
  });

  const [error, setErrors] = useState("");

  const onSubmit = async (values: SignupSchemaType) => {
    const response = await createUser(values);

    if (response.success) {
      router.push("/dashboard");
    } else {
      setErrors(response.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="text-white relative z-20 flex flex-col md:gap-2 md:w-sm">
      <div className="text-center gap-2 flex flex-col">
        <h1>sign up</h1>
        <p>only hot people use this website</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
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
                <div className="flex items-center">
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <button
                    className="absolute right-3"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Confirm Password</FormLabel>
                <div className="flex items-center">
                  <FormControl>
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <button
                    className="absolute right-3"
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FormLabel className="cursor-pointer">Remember Me</FormLabel>
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </Form>
      <p className="error">
        {error && <span className="text-red-500">{error}</span>}
      </p>

      <div className="flex gap-1">
        already have a brat account?{" "}
        <Link href={"/login"} className="font-bold  hover:underline">
          <p>Log in</p>
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
