import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";
import NAV  from "./components/nav";

//const inter = Inter({ subsets: ["latin"] });
const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (

    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-10 ${inter.className}`}
    >
      <NAV />
      <div className="flex w-full items-center justify-center">
        <h1 className="text-9xl dark:drop-shadow-[0_0_0.4rem_#29cce5]">Coming Soon</h1>
        
      </div>

      <div className="justify-between space-y-2 items-center">
        <p>Built with</p>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={360}
          height={74}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  );
}
