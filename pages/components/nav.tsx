import Link from 'next/link';
import { Roboto_Slab } from "next/font/google";

const inter = Roboto_Slab({ subsets: ["latin"] });

export default function NAV() {
  return (
    <nav className={`flex justify-between mx-auto w-full content-start px-10 py-8 ${inter.className}`}>
      <h1 className="text-2xl">DillonGreek.dev</h1>
      <ul className="flex space-x-5">
        <li className="hover:drop-shadow-[0_0_0.7rem_#29cce5]">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:drop-shadow-[0_0_0.7rem_#29cce5]">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:drop-shadow-[0_0_0.7rem_#29cce5]">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}


 
 