import { Roboto_Mono } from "next/font/google";
import NAV from "./components/nav";
import Image from "next/image";
import bubble from "../assets/bubbledanger.jpg";
import stock from "../assets/backofhead.jpg";
import tech from "../assets/techssite.jpg";
import healing from "../assets/healingpeace.jpg";


const inter = Roboto_Mono({ subsets: ["latin"] });


export default function Projects() {
  const projects = [
    {
      image: stock,
      alt: "Github Profile Picture",
      link: "https://github.com/techhead404",
      title: "GitHub",
      description: "My GitHub."
    },
    {
      image: bubble,
      alt: "Bubble Danger Icon",
      link: "https://github.com/Techhead404/BubbleDanger",
      title: "Bubble Danger",
      description: "Android game built with Unity."
    },
    {
      image: tech,
      alt: "Techs Site Screen Shot",
      link: "http://techssite.com",
      title: "Techs Site",
      description: "My blog for sharing project and reviews."
    },
    {
      image: healing,
      alt: "Healing Peace Screen Shot",
      link: "http://HealingPeaceMassage.com",
      title: "Healing Peace Massage",
      description: "Website for a local massage business."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 w-fill h-auto md:w-4/5 lg:w-full mx-auto">
        {projects.map((project, index) => (
          <div className="w-auto h-1/2 text-center" key={index}>
            <Image
              src={project.image}
              alt={project.alt}
              style={{ width: "auto", height: "100%", borderRadius: "15%", margin: "auto", objectFit: "fill"}}
            />
            <h4 className="text-xl text-sky-400 font-bold mt-2">
              {project.link ? (
                <a href={project.link} target="_blank" className="text-sky-400 text-pretty">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h4>
            <p className="text-gray-500">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}