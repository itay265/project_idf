// client/src/components/VisualDisplay.jsx
import React, { useEffect, useState } from "react";
import { getSensor } from "../api/sensors";
import "./VisualDisplay.css";

export default function VisualDisplay() {
  const [altitude, setAltitude] = useState(0);
  const [his, setHis] = useState(0);
  const [adi, setAdi] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setAltitude(await getSensor("altitude"));
      setHis(await getSensor("his"));
      setAdi(await getSensor("adi"));
    };
    fetchData();
  }, []);

  return (
    <div className="visual-container">
      <div className="top-buttons">
        <button className="active">TEXT</button>
        <button>VISUAL</button>
        <button>+</button>
      </div>

      <div className="visual-panels">
        {/* Altitude */}
        <div className="altitude-graph">
          <div className="altitude-line" style={{ bottom: `${(altitude / 3000) * 100}%` }} />
          <div className="altitude-labels">
            <span>3000</span>
            <span>2000</span>
            <span>1000</span>
            <span>0</span>
          </div>
        </div>

        {/* HIS Compass */}
        <div className="his-compass">
          <div className="his-circle">
            <div className="his-arrow" style={{ transform: `rotate(${his}deg)` }} />
            <div className="his-label top">0</div>
            <div className="his-label right">90</div>
            <div className="his-label bottom">180</div>
            <div className="his-label left">270</div>
          </div>
        </div>

        {/* ADI */}
        <div className="adi-indicator" style={{ backgroundColor: adi === 0 ? "green" : "blue" }} />
      </div>
    </div>
  );
}
