import Link from "next/link";
import { Archivo_Narrow } from "next/font/google";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={"/login"}>Login</Link>
      <Link href={"/signup"}>Signup</Link>
    </div>
  );
}
