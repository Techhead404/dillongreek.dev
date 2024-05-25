import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import pic from "../assets/backofhead.jpg"

const inter = Roboto_Mono({ subsets: ["latin"] });

import React from 'react'
import { SocialIcon } from 'react-social-icons'

const reddit = <SocialIcon url="url=https://www.reddit.com" />
export default function Home() {
  return (
    <main
    className="min-h-screen pt-10"
    >
      <div className="flex h-4/5">
      <div className="flex w-fill mx-auto gap-5">
      <SocialIcon url="https://www.reddit.com/user/techs_studio/" />
      <SocialIcon url="https://www.linkedin.com/in/dillon-greek-42386a1a0" />
      <SocialIcon url="https://youtube.com/@techsstudio7159" />
      <SocialIcon url="https://www.twitch.tv/techs_studio" />
      </div>
      
    </div>
      
    </main>
  );
}