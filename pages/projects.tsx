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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-20 w-fill md:w-4/5 mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-5 w-auto">
            <Image
              src={stock}
              alt="Github Profile Picture"
              style={
                { width: "fill -content", height:"auto", margin: "auto"}}
              >
            </Image>
            <h4 className="text-xl text-sky-400 font-bold mt-2"><a href="https://github.com/techhead404" target="_blank" className="text-sky-400 text-pretty">GitHub</a></h4>
            <p className="text-gray-500">My GitHub where I have most projects. I use Github for both version control and backup/fileshare between systems.</p>
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
            <p className="text-gray-500">Android game built with Unity, using Google Play Services and Unity Monetization.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 w-auto">
            <Image
              src={tech}
              alt="Techs Site Screen Shot"
              style={
                { width: "fill -content", height:"auto", margin: "auto"}}
              >
            </Image>
            <h4 className="text-xl text-sky-400 font-bold mt-2">Techs Site</h4>
            <p className="text-gray-500"> Wix blog for sharing project and reviews. Closed after migrating everthing to this site.</p>
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
            <p className="text-gray-500">Website for a local massage business. This site was built using Vue.js for the frontend and Express.js on the backend. Currently running though Square for payments and booking.</p>
          </div>
        </div>
    </main>
  );
}