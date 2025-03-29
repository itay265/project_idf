import React, { useState } from "react";
import Altitude from "./components/Altitude";
import HIS from "./components/HIS";
import ADI from "./components/ADI";
import VisualDisplay from "./components/VisualDisplay";
import "./App.css";

function App() {
  const [mode, setMode] = useState("text");

  return (
    <div className="app">
      <h1>Flight Monitor</h1>

      <div className="top-buttons">
        <button
          className={mode === "text" ? "active" : ""}
          onClick={() => setMode("text")}
        >
          TEXT
        </button>
        <button
          className={mode === "visual" ? "active" : ""}
          onClick={() => setMode("visual")}
        >
          VISUAL
        </button>
        <button>+</button>
      </div>

      {mode === "text" ? (
        <div className="sensor-container">
          <Altitude />
          <HIS />
          <ADI />
        </div>
      ) : (
        <VisualDisplay />
      )}
    </div>
  );
}

export default App;
