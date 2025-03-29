import React, { useState, useEffect } from "react";
import Altitude from "./components/Altitude";
import HIS from "./components/HIS";
import ADI from "./components/ADI";
import VisualDisplay from "./components/VisualDisplay";
import { getSensor, updateSensor } from "./api/sensors";
import "./App.css";

function App() {
  const [mode, setMode] = useState("text");

  const [altitude, setAltitude] = useState(0);
  const [his, setHis] = useState(0);
  const [adi, setAdi] = useState(0);

  useEffect(() => {
    getSensor("altitude").then(setAltitude);
    getSensor("his").then(setHis);
    getSensor("adi").then(setAdi);
  }, []);

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
          <Altitude value={altitude} setValue={setAltitude} />
          <HIS value={his} setValue={setHis} />
          <ADI value={adi} setValue={setAdi} />
        </div>
      ) : (
        <VisualDisplay altitude={altitude} his={his} adi={adi} />
      )}
    </div>
  );
}

export default App;
