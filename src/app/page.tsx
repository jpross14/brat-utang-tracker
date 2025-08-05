import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={"/login"}></Link>
      <Link href={"/signup"}></Link>
      <Link href={"/dashboard"} 
            className="flex h-20 w-fit glass items-center justify-center rounded-full text-4xl px-10 hover:brightness-75"
      >
         <p className="blur-[1px]">shortcut to dashboard</p>
      </Link>
    </div>
  );
}
