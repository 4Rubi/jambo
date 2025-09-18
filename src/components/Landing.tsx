import React from "react";
import PillNav from "./ui/PillNav";
import logo from "../assets/react.svg";
import LiquidEther from "./ui/LiquidEther";
import { InteractiveHoverButton } from "./ui/magicui/interactive-hover-button";
import { SmoothCursor } from "./ui/magicui/smooth-cursor";
import afroBitImage from "../components/images/afro-bit-purple.jpeg";
import mailOpenIcon from "../components/images/purpleeye.jpeg";
import instagramblackIcon from "../components/images/purpledp.jpeg";
import linkedinIcon from "../components/images/bit-rose.jpeg";
import githubIcon from "../components/images/geng-bit.jpeg";

interface LandingProps {
  username: string;
}

const Landing: React.FC<LandingProps> = ({ username }) => {
  return (
    
    <div
      className="container no-scrollbar"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Background Layer */}
      <div
        style={{
          position: "fixed",
          touchAction: "none",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#260B3C",
          zIndex: -1,
        }}
      >
        
        <LiquidEther />
      </div>

      <header
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>.rubi</h1>
        {/* <PillNav logo={logo} items={[]} /> */}
        <h2 className="text-bold font-bold text-white text-[2.5rem]">{username ? `Welcome, ${username}` : "Welcome"}</h2>
      </header>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          padding: "5.5rem",
          color: "#fff",
        }}
      >
        <SmoothCursor />
        {/* Bento Grid Sections */}
        <div className="grid grid-cols-4 gap-4">
          {/* Card 1: Image */}
          <div className="col-span-4 md:row-start-1 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center bg-white/10 min-h-[100px]">
            <img src={afroBitImage} alt="Placeholder" className="w-full h-full object-cover" />
          </div>

          {/* Card 2: Text */}
          <div className="bio-hero col-span-4 md:row-start-1 md:col-span-3 md:row-span-1 rounded-md flex items-center justify-center bg-white/10 min-h-[100px]">
            <h1 className="bio-content">Hi, I'm Rubi 👋</h1>
              <p className="bio-content">
                  A curious frontend developer exploring the world of HTML, CSS, JS & React.
                  I’m fascinated by UI/UX design and love building interfaces that feel smooth,
                  intuitive, and just a little bit magical ✨.
              </p>
          <span className="tagline">Always building. Always learning.</span>
            </div>

          {/* Card 6: Square */}
          <div className="col-span-4 md:row-start-2 md:col-span-4 md:row-span-0 rounded-md flex items-center justify-center bg-white/10 min-h-[100px]">
            Card 6 (Square)
          </div>

          {/* Cards 3, 4, 5 */}
          <div className="col-span-4 md:row-start-3  grid grid-cols-4 gap-4">
            <div className="relative rounded-md flex items-center justify-center bg-white/10 transition-transform duration-300 hover:scale-110 aspect-square">
                  <img src={mailOpenIcon} alt="Mail Open Icon" className=" absolute inset-0 w-full h-full object-cover "/>
                  <a 
                    href="mailto:mikepaul418@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <InteractiveHoverButton className=" absolute inset-0 opacity-0  hover:opacity-100 scale-100 zindex-33">
                      .email
                    </InteractiveHoverButton>
                  </a>
            </div>

            <div className="relative rounded-md flex items-center justify-center bg-white/10 transition-transform duration-300 hover:scale-110 aspect-square">
                <img src={linkedinIcon} alt="" className="absolute inset-0 w-full h-full object-cover"/>
              <a 
                href="https://www.linkedin.com/in/paul-karubi-950528385/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <InteractiveHoverButton className="absolute inset-0 opacity-0 hover:opacity-100 scale-100">
                  .linkedin
                </InteractiveHoverButton>
              </a>
            </div>
            <div className="relative rounded-md flex items-center justify-center bg-white/10 transition-transform duration-300 hover:scale-110 aspect-square">
                <img src={instagramblackIcon} alt="Instagram Icon" className="absolute inset-0 w-full h-full object-cover" />
                <a href="https://www.instagram.com/4lrubi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  
                  <InteractiveHoverButton className="absolute inset-0 opacity-0 hover:opacity-100 scale-100 ">
                    .instagram
                  </InteractiveHoverButton>
                </a>
            </div>
            <div className="relative rounded-md flex items-center justify-center   bg-white/10 transition-transform duration-300 hover:scale-110 aspect-square">
              <img src={githubIcon} alt="GitHub Icon" className="absolute inset-0 w-full h-full object-cover"/>
              <a 
                href="https://github.com/4Rubi" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <InteractiveHoverButton className="absolute inset-0 opacity-0 hover:opacity-100 scale-100 ">
                  .git
                </InteractiveHoverButton>
              </a>
            </div>
          </div>

          {/* Card 7: Full width */}
          <div className="col-span-4 rounded-md flex items-center justify-center bg-white/10 min-h-[12rem]">
            Card 7 (Full Width)
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
