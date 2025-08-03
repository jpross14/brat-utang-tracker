import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <div className="absolute -right-50 -bottom-1 -z-10 h-full w-full">
        <Image
          src={"/charli-landing.png"}
          alt="Charli Logo"
          fill
          className="bg-main object-cover object-[30%]"
        />
      </div>
      <div className="flex h-full w-1/2 flex-col gap-4 p-30">
        <p className="text-8xl blur-[1px]">
          brat and it&apos;s the same but it&apos;s an utang tracking app so
          it&apos;s not
        </p>
        <p className="text-white blur-[0.5px]">
          because financial management is fierce
        </p>
        <div className="flex w-full gap-5 text-white blur-[0.7px]">
          <Link href={"/login"}>
            <Button variant={"outline"} className="bg-main">
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button variant={"outline"} className="bg-main">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
      <div className="top-0 h-full bg-gradient-to-t from-[#1E3300] to-transparent" />
      <Logo className="absolute right-3 bottom-3" />
    </div>
  );
}
