import { Roboto_Mono } from "next/font/google";
import NAV from "./components/nav";


const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main
    className="flex min-h-screen flex-col items-center pt-10"
    >
        <div className="m-auto text-center">
        <h1 className="text-4xl">Nothing yet<span className="text-sky-400"> :( </span>but here is my <a href="http://github.com/techhead404" className="text-sky-400 underline">Github</a></h1>
        </div>
    </main>
  );
}