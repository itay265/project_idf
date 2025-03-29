import React, { useState, useEffect } from "react";
import VisualDisplay from "./components/VisualDisplay";
import InputPanel from "./components/InputPanel";
import TextDisplay from "./components/TextDisplay";
import { getSensor } from "./api/sensors";
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
        <button
          className={mode === "input" ? "active" : ""}
          onClick={() => setMode("input")}
        >
          +
        </button>
      </div>

      {mode === "text" && (
        <TextDisplay altitude={altitude} his={his} adi={adi} />
      )}

      {mode === "visual" && (
        <VisualDisplay altitude={altitude} his={his} adi={adi} />
      )}

      {mode === "input" && (
        <InputPanel
          altitude={altitude}
          his={his}
          adi={adi}
          setAltitude={setAltitude}
          setHis={setHis}
          setAdi={setAdi}
          onClose={() => setMode("visual")}
        />
      )}
    </div>
  );
}

export default App;
