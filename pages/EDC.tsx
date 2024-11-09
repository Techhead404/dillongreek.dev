import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
//import NAV from "../components/nav";
import edc1 from "../assets/edc/edc1.webp";
import edc2 from "../assets/edc/edc2.webp";


const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-5">
  
      <article className="prose lg:prose-lg mx-auto text-gray-200">
        <h1 className="text-center text-4xl font-bold mb-3 text-gray-100">
          EDC bag
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">By Dillon Greek</p>
        <h1>Maximizing Productivity: How I Use Every Minute in My Day.</h1>
        <div className="flex justify-center mb-8">
          <Image
            src={edc1}
            alt="DigiSpark Attiny85 USB"
            className="rounded-lg shadow-lg"
            style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          />
        </div>

        <p>
          As someone working a full-time job and having kids, I&apos;ve perfected a routine that ensures I make the most out of every moment, especially during short waits and commutes. My Everyday Carry (EDC) is designed to balance my professional and personal development needs. After countless hours of shopping, I found a small bag that&apos;s just large enough for my laptop, a book, and a few accessories like a notebook and charger. With my laptop and a book always at hand, I&apos;ve created a system that maximizes productivity regardless of the time available.
        </p>
        <h4>The Essentials in My EDC</h4>
        <p>My EDC is compact yet versatile, containing just the essentials:</p>
        <ol>
          <li>
            <strong>Laptop:</strong> My primary tool for coding and professional development.
          </li>
          <li>
            <strong>Book:</strong> For those brief moments of downtime, where a quick read is more practical than setting up my laptop.
          </li>
        </ol>
        <div className="flex justify-center mb-8">
          <Image
            src={edc2}
            alt="DigiSpark Attiny85 USB"
            className="rounded-lg shadow-lg"
            style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          />
        </div>
        <h4>Making the Most of Short Bursts of Time</h4>
        <p>
          Time management is key when balancing a busy schedule. Here is how I break down my activities based on the time I have:
        </p>

        <ul>
          <li>
            <strong>15 Minutes or Less: Reading a Book:</strong> If I have a short window, like waiting for an appointment or during a quick coffee break, I dive into my book. This habit not only keeps me entertained but also continually broadens my knowledge and stimulates my creativity. Whether it is a technical manual, a business strategy guide, or a fiction novel, I find that even a few minutes of reading can be refreshing and enlightening.
          </li>
          <li>
            <strong>More than 15 Minutes: Coding and Labs:</strong> When I know I will have more than 15 minutes, I switch to my laptop. This is my time to delve into coding projects, tackle labs on Hack The Box, or work on other platforms. These sessions are dedicated to enhancing my skills, troubleshooting challenging problems, and pushing my professional boundaries.
          </li>
          </ul>
        <h4>Why This System Works</h4>
        <ul>
          <li>
            <strong>Flexibility:</strong> The dual-option setup of my EDC means Im never at a loss for something productive to do, regardless of the time constraints.
          </li>
          <li>
            <strong>Efficiency:</strong> By having clear guidelines on how to use my time, I avoid the common trap of wasting minutes deciding what to do.
          </li>
          <li>
            <strong>Continuous Learning:</strong> Whether through reading or coding, Im always learning and improving, which keeps me engaged and motivated.
          </li>
        </ul>

        <h4>Tips for Your Own Productivity System</h4>
        <ul>
          <li>
            <strong>Identify Your Essentials:</strong> Determine what tools or items are most beneficial for your personal and professional growth and make them a permanent part of your EDC.
          </li>
          <li>
            <strong>Set Clear Time-Based Activities:</strong> Decide in advance what activities you can do based on different time frames. This removes the guesswork and maximizes your efficiency.
          </li>
          <li>
            <strong>Stay Consistent:</strong> The effectiveness of this system lies in consistency. Make it a habit, and soon it will become second nature.
          </li>
        </ul>

        <p>
          By structuring my time this way, I have found that even the busiest of days have pockets of productivity. Whether it is through a quick read or a focused coding session, every moment counts. Try adopting a similar approach, and you might find that your productivity soars as well.
        </p>
        <style jsx>{`
          main {
            font-family: ${inter.style.fontFamily};
          }
          .prose {
            max-width: 800px;
            color: #e5e5e5;
            line-height: 1.7;
          }
          h1 {
            color: #f5f5f5;
          }
          .prose p {
            margin-top: 1rem;
            margin-bottom: 1.5rem;
          }
          .prose a {
            color: #63b3ed;
            text-decoration: underline;
          }
          .prose a:hover {
            color: #3182ce;
          }
          .prose p,
          .prose h1,
          .prose h2,
          .prose h3,
          .prose h4 {
            color: #d1d1d1;
          }
          pre {
            background-color: #333;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 1rem;
          }
        `}</style>
      </article>
    </main>
  );
}