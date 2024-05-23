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
          <div className="mx-auto flex gap-5">
          
        </div>
        <div className="grid grid-cols-3 gap-4 p-20 w-4/5 mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-5 w-auto">
            <Image
              src={stock}
              alt="Github Profile Picture"
              style={
                { width: "fill -content", height:"auto", margin: "auto"}}
              >
            </Image>
            <h4 className="text-xl text-sky-400 font-bold mt-2"><a href="https://github.com/techhead404" target="_blank" className="text-sky-400 text-pretty">GitHub</a></h4>
            <p className="text-gray-500">My GitHub.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 w-auto">
            <Image
              src={bubble}
              alt="Bubble`Danger Icon"
              style={
                { width: "fill -content", height:"auto", margin: "auto"}}
              >
            </Image>
            <h4 className="text-xl text-sky-400 font-bold mt-2">Bubble Danger</h4>
            <p className="text-gray-500">Android game built with Unity.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 w-auto">
            <Image
              src={tech}
              alt="Techs Site Screen Shot"
              style={
                { width: "fill -content", height:"auto", margin: "auto"}}
              >
            </Image>
            <h4 className="text-xl text-sky-400 font-bold mt-2"><a href="http://techssite.com" target="_blank" className="text-sky-400 text-pretty">Techs Site</a></h4>
            <p className="text-gray-500">My blog for sharing project and reviews.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 w-auto">
            <Image
              src={healing}
              alt="Healing Peace Screen Shot"
              style={
                { width: "fill -content", height:"auto", margin: "auto"}}
              >
            </Image>
            <h4 className="text-xl text-sky-400 font-bold mt-2"><a href="http://HealingPeaceMassage.com" target="_blank" className="text-sky-400 text-pretty">Healing Peace Massage</a></h4>
            <p className="text-gray-500">Website for a local massage business.</p>
          </div>
        </div>
    </main>
  );
}