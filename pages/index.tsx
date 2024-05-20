import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import NAV  from "./components/nav";
import pic from "../assets/backofhead.jpg"

const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className="min-h-screen pt-10"
    >
      <div className="flex h-4/5 justify-between">
      <div className="w-1/4 mx-auto text-center">
      <Image
        src={pic}
        alt="Picture of the author"
        style={
          {borderRadius: "50%", width: "fill -content", height:"auto", margin: "auto"}}
        >
      </Image>
      <h1 className="text-xl">Dillon Greek</h1>
      <p>Full Stack Developer</p>
      </div>
      <section className="w-1/2 space-y-10 h-fit  mx-auto border-2 rounded-2xl border-sky-400 p-8 bg-[#171717]">
      <h2 className="text-xl font-bold text-sky-400 ">About Me</h2>
      <p>
        I am a full stack developer with a passion for creating and learning. I have experience in a variety of languages and frameworks including PHP, Javascript, C#, and Python. I have an associates degree in Computer Information Science and am currently working on my bachelors degree in Cyber Security. I am always looking for new projects to work on and new things to learn.
      </p>
      <p>
        I also study electical engineering and have experience with microcontrollers and embedded systems. I work with the Arduino, ESP32, Attiny85, and Raspberry Pi and have experience with C and Python programming.
      </p>
      </section>
    </div>
      
    </main>
  );
}
