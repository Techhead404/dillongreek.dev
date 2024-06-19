import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import pic from "../assets/backofhead.jpg"
import NAV  from "./components/nav";
const inter = Roboto_Mono({ subsets: ["latin"] });

import React from 'react'
import { SocialIcon } from 'react-social-icons'


export default function Contact() {
  return (
    <main
    className="min-h-screen pt-10"
    >
      <div className="flex h-4/5">
      <div className="flex w-fill mx-auto gap-5">
      <SocialIcon url="https://www.reddit.com/user/techs_studio/" target="_blank"/>
      <SocialIcon url="https://www.linkedin.com/in/dillon-greek-42386a1a0" target="_blank"/>
      <SocialIcon url="https://youtube.com/@techsstudio7159" target="_blank"/>
      <SocialIcon url="https://www.twitch.tv/techs_studio" target="_blank"/>
      <SocialIcon url="https://discord.com/channels/dillon_g" target="_blank"/>
      </div>
      
    </div>
      
    </main>
  );
}