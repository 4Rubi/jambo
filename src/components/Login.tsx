import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "./ui/Particles";
import { InteractiveHoverButton } from "./ui/magicui/interactive-hover-button";
import { SmoothCursor } from "./ui/magicui/smooth-cursor";

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [guestUsername, setGuestUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestUsername) {
      onLogin(guestUsername);
      navigate("/landing");
    } else {
      alert("Please enter a name");
    }
  };

  return (
    <>
    <SmoothCursor />
      <div style={{ display: "flex", backgroundColor: "#260B3C", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" , width: "100vw", top:0, left:0, position: "fixed", overflow: "hidden"}}>
        <h2 className="text-bold, text-white">Enter as Guest</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px", background: "transparent", padding: "2rem", borderRadius: "8px", zIndex: 1  }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={guestUsername}
          onChange={e => setGuestUsername(e.target.value)}
        />
        <InteractiveHoverButton type="submit">Continue</InteractiveHoverButton>
      </form>

        <Particles className="particles-bg, position-fixed top-0 left-0 w-100vw h-100vh overflow-hidden" />
      </div>
    
    </>
  );
};

export default Login;