import React from "react";
import "./TextDisplay.css";

export default function TextDisplay({ altitude, his, adi }) {
  return (
    <div className="text-display">
      <div className="text-box">
        <h3>Altitude</h3>
        <p>{altitude} ft</p>
      </div>
      <div className="text-box">
        <h3>HIS</h3>
        <p>{his}°</p>
      </div>
      <div className="text-box">
        <h3>ADI</h3>
        <p>{adi}°</p>
      </div>
    </div>
  );
}
