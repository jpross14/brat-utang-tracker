"use client";

import { useForm } from "@tanstack/react-form";
import Image from "next/image";

const SignupForm = () => {
  const { Field, Subscribe } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="text-white bg-main h-screen">
      <div className="z-1 top-0 left-0 right-0 h-full absolute flex items-center justify-center ">
        <Image
          src={"/charli-signup.png"}
          fill
          alt="Charli Signup"
          className="object-cover opacity-40"
        />
      </div>
      <form className="z-2 bg-slate-400 flex flex-col">
        <Field name="email">
          {(field) => (
            <>
              <label htmlFor={field.name}>Email</label>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="email"
              />
              <p>
                {field.state.meta.isValid && field.state.meta.errors.join(", ")}
              </p>
            </>
          )}
        </Field>
        <Field name="password">
          {(field) => (
            <>
              <label htmlFor={field.name}>Password</label>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="password"
              />
              <p>
                {field.state.meta.isValid && field.state.meta.errors.join(", ")}
              </p>
            </>
          )}
        </Field>{" "}
        <Field name="confirmPassword">
          {(field) => (
            <>
              <label htmlFor={field.name}>Confirm Password</label>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="password"
              />
              <p>
                {field.state.meta.isValid && field.state.meta.errors.join(", ")}
              </p>
            </>
          )}
        </Field>
        <Subscribe>
          {(state) => (
            <>
              <button disabled={state.isSubmitting}>
                {state.isSubmitting ? "Submitting..." : "Submit"}
              </button>
              
            </>
          )}
        </Subscribe>
      </form>
    </div>
  );
};

export default SignupForm;
