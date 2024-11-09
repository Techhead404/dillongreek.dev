import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import NAV from "./components/nav";
import rick1 from "../assets/rickroll/rick1.webp";
import rick2 from "../assets/rickroll/rick2.webp";
import rick3 from "../assets/rickroll/rick3.webp";

const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-5">
      <article className="prose lg:prose-lg mx-auto text-gray-200">
        <h1 className="text-center text-4xl font-bold mb-3 text-gray-100">
          Attiny85 USB Rick Roll
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">By Dillon Greek</p>

        <div className="flex justify-center mb-8">
          <Image
            src={rick1}
            alt="DigiSpark Attiny85 USB"
            className="rounded-lg shadow-lg"
            style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          />
        </div>

        <p>
          Anytime you get new tech to play with one of the first things to do is
          play around. Goofing off in a sense is a great way to learn something
          fast. When I got my hands on the DigiSpark Attiny85 USB that was
          exactly what I did. After I was finished I realized that I actually
          made a fun project that others might enjoy. So that is what I am doing.
          So lets jump into it.
        </p>
        <p>
          First thing you are going to need is the Attiny85 USB. They are super
          cheap, mine came in a pack of 5 for around $20. Now installing the
          drivers can be a pain, but I will walk you through it real fast and
          point out some common problems. You need to download the drivers from
          Unzip and install the DPinst64 file. If the Attiny is not recognized
          you will need to go into your device manager and click View, Show
          Hidden Devices then with it plugged in look under “Other Devices” and
          you should see it named DigiSpark. Click on it and select update
          drivers and select the driver you unzipped. Here is the problem I had.
          If you do NOT hear the connection sound when you plug it in then try a
          different USB port. I had to use the port on the back of my computer
          to do this, later getting my USB dock that I plugged into the back of
          my computer.
        </p>
        <p>
          To do that go in the Arduino IDE and go to File/Preferences and add{" "}
          <a
            href="http://digistump.com/package_digistump_index.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://digistump.com/package_digistump_index.json
          </a>{" "}
          to the Additional boards manager URLs:
        </p>

        <Image
          src={rick2}
          alt="DigiSpark Attiny85 USB"
          className="rounded-lg shadow-lg"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />

        <p>
          Click on Tools / Boards Manager and search Digistump. Install the
          Digistump AVR Boards. After that is finished go into your IDE and
          select the Board -- DigiSpark Default - 16.5mhz.
        </p>

        <Image
          src={rick3}
          alt="DigiSpark Attiny85 USB"
          className="rounded-lg shadow-lg"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />

        <p>
          Now that you have the drivers installed and the board selected it is
          time to write some code and upload it to the board. This script has
          basic features for keyboard output and covers enough that you can move
          on to other projects and know how to use the keyboard out. We will
          start with turning the LED light on so we know our script is running.
        </p>

        <pre>
          <code>
            {`#include "DigiKeyboard.h"

void setup() {
  pinMode(1, HIGH);
}`}
          </code>
        </pre>

        <p>
          When working with the DigiKeyboard SendKey you need to remember
          SendKeyPress means it will hold the key without releasing while the
          SendKeyStroke is a press and release. We will be using both in this
          script and it is important to note their function. The first thing to
          do is open the search so we can open programs. Do this with:
        </p>

        <pre>
          <code>
            {`#include "DigiKeyboard.h"

void setup() {
  pinMode(1, HIGH);

  DigiKeyboard.sendKeyPress(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
}`}
          </code>
        </pre>

        <p>
          We add a delay so the computer has time to do what we asked. If you
          did not have the delay it would type faster than the computer could
          handle. Now we are searching for Adjust Volume and using the Tab key
          to move to the volume slider. This part might need to be written
          differently depending on your computer. Just navigate to the setting
          you want using Tab and Backspace to move around noting the order you
          press them and use that in the code. Once you have volume selected use
          SendKeyPress(Key_Right_Arrow) to adjust the slider all the way to the
          right with a delay of (3000).
        </p>
        <p>
          The 3000 delay means it will hold the right arrow down for that amount
          of time. So even if the computer volume is all the way down that will
          be enough time to max it out.
        </p>

        <pre>
          <code>
            {`#include "DigiKeyboard.h"

void setup() {
  pinMode(1, HIGH);

  DigiKeyboard.sendKeyPress(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("Adjust Volume");
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyPress(KEY_RIGHT_ARROW);
  DigiKeyboard.delay(3000);
}`}
          </code>
        </pre>

        <p>
          Now that the volume is up, we will search again this time searching
          for Chrome “since that is what is installed on my computer”.
        </p>

        <pre>
          <code>
            {`#include "DigiKeyboard.h"

void setup() {
  pinMode(1, HIGH);

  DigiKeyboard.sendKeyPress(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("Adjust Volume");
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyPress(KEY_RIGHT_ARROW);
  DigiKeyboard.delay(3000);
  DigiKeyboard.sendKeyPress(0);
  DigiKeyboard.sendKeyPress(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("chrome");
  DigiKeyboard.delay(1500);
}`}
          </code>
        </pre>

        <p>
          Last step is to paste the link you want to load. In my case I used the
          classic Rick Astley.
        </p>

        <pre>
          <code>
            {`#include "DigiKeyboard.h"

void setup() {
  pinMode(1, HIGH);

  DigiKeyboard.sendKeyPress(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("Adjust Volume");
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_ENTER);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.sendKeyStroke(KEY_TAB);
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyPress(KEY_RIGHT_ARROW);
  DigiKeyboard.delay(3000);
  DigiKeyboard.sendKeyPress(0);
  DigiKeyboard.sendKeyPress(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("chrome");
  DigiKeyboard.delay(1500);
  DigiKeyboard.println("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
}`}
          </code>
        </pre>

        <p>
          That wraps it up. Pretty simple and easy to modify. You could move the
          search for chrome and the site link into the loop function with a
          delay function to open windows over and over.
        </p>
        <p>
          Add a list of links and randomly pick one from a list to give someone
          a really hard time. This project is really just to have fun and get
          you used to the Attiny85 features. I hope you enjoy it!
        </p>

        <pre>
          <code>
            {`void loop() {
  DigiKeyboard.sendKeyStroke(KEY_S, KEY_LEFT_GUI);
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("chrome");
  DigiKeyboard.delay(1500);
  DigiKeyboard.println("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
  delay(5);
}`}
          </code>
        </pre>

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