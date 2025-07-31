import LoginForm from "@/components/LoginForm";
import { SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen relative w-full items-center justify-center gap-4">
      <div>
        <Link href={"/"}>
          <SquareChevronLeft color="white" size={40} />
        </Link>
        <LoginForm />
      </div>
      <div className="absolute  -z-10 bg-main h-full w-full ">
        <Image
          src={"/charli-login.png"}
          fill
          alt="Charli Signup"
          className="object-cover opacity-50 object-[30%]"
        />
      </div>
      <div className="-z-5 absolute inset-0 bg-gradient-to-t from-neutral-950/90"></div>
    </div>
  );
};

export default LoginPage;
