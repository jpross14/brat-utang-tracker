import SignupForm from "@/components/SignUpForm";
import { SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col h-screen relative w-full items-center justify-center gap-4">
      <div>
        <Link href={"/"}>
          <SquareChevronLeft color="white" size={40} />
        </Link>
        <SignupForm />
      </div>
      <div className="absolute  -z-10 bg-main h-full w-full ">
        <Image
          src={"/charli-signup.png"}
          fill

          alt="Charli Signup"
          className="object-cover opacity-50 object-[30%]"
        />
      </div>
      <div className="-z-10 absolute inset-0 bg-gradient-to-t from-neutral-950"></div>
    </div>
  );
};

export default Signup;
