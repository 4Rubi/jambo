import React from "react";

import PillNav from "./ui/PillNav";
import logo from "../assets/react.svg"; // or your logo path
import LiquidEther from "./ui/LiquidEther";
import { SmoothCursor } from "./ui/magicui/smooth-cursor";
import Particles from "./ui/Particles";


const navItems = [
  { label: "Home", href: "/landing" },
  { label: "Login", href: "/login" },
  { label: "Contacts", href: "/contacts" }
];

const Landing: React.FC = () => {
  return (
    <>
      <div className="container">
      <SmoothCursor />
      <div style={{ position: "fixed", width: "100vw", height: "100vh", top: 0, left:0, backgroundColor: "#260B3C" ,overflow: "hidden"}}>  
        <div style={{ position: "absolute", touchAction: "none", top: 0, left: 0, width: "100%", height: "100%"}}>
          <LiquidEther />
        </div>
        <div>
          <PillNav logo={logo} items={navItems} />
        </div>
        <div style={{ position: "fixed", color: "#ffffff", zIndex: 1 , display: "flex", justifyContent: "center", height: "10%", width: "10%", fontSize: "2rem" }}>
          <h1 className="text-bold, text-white, font- medium, bg-center text-5xl, object-top-left ml-1.5.5 p-1.5">.rubi</h1>       
        </div>
        <div className="flex items-center justify-center h-screen text-white z-10 relative pointer-events-none">
          <p>Welcome to the landing page!</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
