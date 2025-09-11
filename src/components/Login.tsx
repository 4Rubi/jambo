import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "./ui/Particles";
import { Button } from "./ui/magicui/button";
import { InteractiveHoverButton } from "./ui/magicui/interactive-hover-button";
import { SmoothCursor } from "./ui/magicui/smooth-cursor";


const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple login logic (replace with real auth)
    if (username && password) {
      navigate("/landing");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <>
    <SmoothCursor />
      <div style={{ display: "flex", backgroundColor: "#260B3C", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" , width: "100vw", top:0, left:0, position: "fixed", overflow: "hidden"}}>
        <h2 className="text-bold, text-white">Welcome</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px", background: "transparent", padding: "2rem", borderRadius: "8px", zIndex: 1  }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <InteractiveHoverButton type="submit">Login</InteractiveHoverButton>
      </form>

        <Particles className="particles-bg, position-fixed top-0 left-0 w-100vw h-100vh overflow-hidden" />
      </div>
    
    </>
  );
};

export default Login;
