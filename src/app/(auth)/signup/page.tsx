import SignupForm from "@/components/SignUpForm";
import { SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-4">
      <div>
        <Link href={"/"}>
          <SquareChevronLeft color="white" size={40} />
        </Link>
        <SignupForm />
      </div>
      <div className="bg-main absolute -z-10 h-full w-full">
        <Image
          src={"/charli-signup.png"}
          fill
          alt="Charli Signup"
          className="object-cover object-[30%] opacity-50"
        />
      </div>
      <div className="absolute inset-0 -z-5 bg-gradient-to-t from-neutral-950/90"></div>
    </div>
  );
};

export default Signup;
