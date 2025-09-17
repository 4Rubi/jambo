import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import './App.css';

const App: React.FC = () => {
  const [guestUsername, setGuestUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={setGuestUsername} />} />
        <Route path="/landing" element={<Landing username={guestUsername} />} />
      </Routes>
    </Router>
  );
};

export default App;
