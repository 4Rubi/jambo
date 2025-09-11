import React from "react";

import PillNav from "./ui/PillNav";
import logo from "../assets/react.svg"; // or your logo path
import LiquidEther from "./ui/LiquidEther";
import { SmoothCursor } from "./ui/magicui/smooth-cursor";


const navItems = [
  { label: "Home", href: "/landing" },
  { label: "Login", href: "/login" },
  { label: "Contacts", href: "/contacts" }
];

const Landing: React.FC = () => {
  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh", top: 0, left:0, background:"#000" ,overflow: "hidden" }}>
      <SmoothCursor />
      <LiquidEther className="liquid-ether-container" />
      <PillNav logo={logo} items={navItems} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <section style={{ textAlign: "justify", color: "#000", zIndex: 2 }}>
          <h1 style={{ color: "#fff", fontSize: "3rem", marginBottom: "1rem" }}>Landing Page</h1>
         </section>
      </div>
    </div>
  );
};

export default Landing;
