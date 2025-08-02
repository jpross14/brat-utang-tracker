import Link from "next/link";
import DashboardPage from "./(home)/dashboard/page";


export default function Home() {
  return (
   //  <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   //    <Link href={"/login"}></Link>
   //    <Link href={"/signup"}></Link>
   //  </div>
   <div className={``}>
      <Link href="/dashboard">
         <button>hey</button>
      </Link>
   </div>
  );
}
