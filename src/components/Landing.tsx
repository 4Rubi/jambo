import React from "react";

import PillNav from "./ui/PillNav";
import logo from "../assets/react.svg"; // or your logo path
import LiquidEther from "./ui/LiquidEther";


const navItems = [
  { label: "Home", href: "/landing" },
  { label: "Login", href: "/login" },
  { label: "Contacts", href: "/contacts" }
];

const Landing: React.FC = () => {
  return (
    <div style={{ position: "fixed", width: "100vw", height: "100vh", top: 0, left:0, background:"#000" ,overflow: "hidden" }}>
      <LiquidEther className="liquidEther-bg" />
      <PillNav logo={logo} items={navItems} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>.rubi</h1>
      <p>This is your landing page after login.</p>
      </div>
    </div>
  );
};

export default Landing;
