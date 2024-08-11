import { Roboto_Mono } from "next/font/google";
import NAV from "./components/nav";
import Image from "next/image";
import bubble from "../assets/bubbledanger.jpg";
import stock from "../assets/backofhead.jpg";
import tech from "../assets/techssite.jpg";
import healing from "../assets/healingpeace.jpg";


const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col pt-10">

        <div className="flex w-fill mx-auto">
        <h1>I working on it!</h1>
        </div>
    </main>
  );
}