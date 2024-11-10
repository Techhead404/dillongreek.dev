import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import NAV from "./components/nav";
import pi1 from "../assets/piCam/pi1.webp";
import pi2 from "../assets/piCam/pi2.webp";
import pi3 from "../assets/piCam/pi3.webp";

const inter = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-5">
      <article className="prose lg:prose-lg mx-auto text-gray-200">
        <h1 className="text-center text-4xl font-bold mb-3 text-gray-100">
          Building a Pi Zero Wifi Camera 
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">By Dillon Greek</p>

        

        <p>
          Need to keep an eye on the Driveway but also finish work on the computer? Ok so my house layout makes it impossible to hear the bus pull in. My office is on the 2nd floor, on the opposite side of the driveway. Since my son is disabled I have to help him off the bus. The bus shows up between 3:45 and 5:15. I have to work so I can’t just sit and wait looking out the window. Since I have an extra pi or 2 sitting around I thought this would be a good way to put 1 to work. So let’s get started.
        </p>

        <h2>Here is what you will need.</h2>
        <div className="flex justify-center mb-8">
          <Image
            src={pi1}
            alt="DigiSpark Attiny85 USB"
            className="rounded-lg shadow-lg"
            style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          />
        </div>
        <ul>
          <li><a href="https://amzn.to/37nElOC" target="_blank" rel="noopener">Raspberry Pi Zero</a></li>
          <li><a href="https://amzn.to/3xbzFXa" target="_blank" rel="noopener">Pi camera</a></li>
          <li><a href="https://amzn.to/3KhCGIV" target="_blank" rel="noopener">SD card</a></li>
          <li><a href="https://github.com/motioneye-project/motioneyeos/wiki/Supported-Devices" target="_blank" rel="noopener">Motion</a></li>
          <li><a href="https://amzn.to/3jHjicA" target="_blank" rel="noopener">Infrared IR Camera</a></li>
          <li><a href="https://amzn.to/37KFjVl" target="_blank" rel="noopener">Battery Module</a></li>
        </ul>

        <p>
          You won’t need much. I put together a list with links so you can get everything you need. Ok see small list nothing fancy. After we are done I will show you how to upgrade to an IR camera and battery.
        </p>

        <h2>Putting everything together.</h2>
        <p>
          Now that you have everything you need, it’s time to install the software. You can download Motion Eye at the link above. Make sure you download the correct one for your pi. I downloaded the ”Raspberry PI (A, B, A+, B+, Compute Module, Zero and Zero W models). Just click the latest version link at the time of writing it was 2020060. After the download is finished, use Noobs to install it on the SD card. If you do not have noobs installed you can download it <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noopener">here</a>. Under OS select custom image, then MotionEye.img. Now select the SD card and click install. With that installing now is a good time to assemble the pi. Slide the black clips up and insert the ribbon with the metal facing the board. Do the same on the camera. With the ribbon fully seated press the black clip back down to lock it in place. Check to make sure the ribbon is straight and square with the clip.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src={`/${pi2}`+ ".webp"}
            alt="DigiSpark Attiny85 USB"
            className="rounded-lg shadow-lg"
            style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          />
        </div>

        <h2>Set up the software.</h2>
        <p>
          Once the install is finished Motion Eye OS is now installed. Now you will need to create a txt file with your country code, ssid, and password. Create a new txt file named wpa_supplicant and copy/paste the following in and change the ssid and psk to your wifi name and password.
        </p>

        <pre>
          <code>
            {`country=US
update_config=1
ctrl_interface=/var/run/wpa_supplicant

network={
  scan_ssid=1
  ssid="NetworkName"
  psk="Password"
}`}
          </code>
        </pre>

        <p>
          After saving the updates drag n drop it into the root folder on the sd card. If you are on windows this might throw an error that the drive needs formatted. If that happens remove the card and reinsert it.
        </p>

        <h2>Connect to the Camera.</h2>
        <p>
          Almost finished! With everything set up now it is time to plug it in and connect to it. To connect to the camera you will need the IP address of the pi. The easiest way is to check your router for the Pi and get the IP from it. The second option is to use the command prompt. Type ipconfig and press enter. Then enter arp –a this will return a list of IP addresses. After you have your list turn the pi zero on and wait a few minutes for it to fully set up and run arp –a again. You should now see a new IP Address on the list. Now that you have the IP Address, open a browser and put the IP Address into the address bar. MotionEye will ask for a log in and password. Default it is set to Username: admin Password “blank”. So enter admin and hit enter. Now you should see your camera feed in the browser. One important note is if you change the Username or Password REMEMBER IT. There is no way to reset the password. You will have to reinstall MotionEye and redo the json file to reset the password.
        </p>

        <h2>Conclusion.</h2>
        <p>
          Congrats you now have your own wifi camera you use how you please. Now that its finished you could do some upgrades. Everything on my camera is simple plug in upgrades. No change to software was needed. The <a href="https://amzn.to/3jHjicA" target="_blank" rel="noopener">IR camera</a> was a great add-on for keeping track of kids sneaking snacks in the middle of the night, and the <a href="https://amzn.to/37KFjVl" target="_blank" rel="noopener">battery pack</a> means I can set up the camera anywhere without having a cord hanging from it.
        </p>
        <p>
          I hope you enjoyed this and let me know what you end up with. That is a great thing about using a Pi, you can add almost anything and make it fit your needs.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src={pi3}
            alt="DigiSpark Attiny85 USB"
            className="rounded-lg shadow-lg"
            style={{ width: "100%", height: "auto", maxWidth: "600px" }}
          />
        </div>
        <style jsx>{`
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