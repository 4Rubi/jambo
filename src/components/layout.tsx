import React from "react";
import PillNav from "./ui/PillNav";
import Footer from "./Footer";
import logo from "../assets/react.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: "Home", href: "/landing" },
    { label: "Login", href: "/login" },
    { label: "Mock", href: "/s" },
  ];  
  return (
    <>
      <PillNav logo={logo} items={navItems} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
