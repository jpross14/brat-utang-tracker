import LoginForm from "@/components/LoginForm";
import UnauthorizedToast from "@/components/UnauthorizedToast";
import { SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface LoginPageProps {
  searchParams: Promise<{
    "not-logged-in"?: string | undefined;
  }>;
}

const LoginPage = async ({ searchParams }: LoginPageProps) => {
  const params = await searchParams;

  console.log("LoginPage params:", params);

  return (
    <div className="flex flex-col h-screen relative w-full items-center justify-center gap-4">
      {params && params["not-logged-in"] === "true" && <UnauthorizedToast />}
      <div>
        <Link href={"/"} aria-label="Go back to home page">
          <SquareChevronLeft
            color="white"
            size={40}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        <LoginForm />
      </div>
      <div className="absolute -z-10 bg-main h-full w-full ">
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
