import React from "react";
import Altitude from "./components/Altitude";
import HIS from "./components/HIS";
import ADI from "./components/ADI";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Flight Monitor</h1>
      <div className="sensor-container">
        <Altitude />
        <HIS />
        <ADI />
      </div>
    </div>
  );
}

export default App;
