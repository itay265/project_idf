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

  const getAdiColor = () => {
    if (adi === 0) return "green";
    if (adi === 100) return "blue";
    const blue = Math.round((adi / 100) * 255);
    return `rgb(0, ${255 - blue}, ${blue})`;
  };

  return (
    <div className="visual-container">
      <div className="visual-panels">
        {/* Altitude */}
        <div className="altitude-graph">
          <div
            className="altitude-line"
            style={{ bottom: `${(altitude / 3000) * 100}%` }}
          />
          <div
            className="altitude-arrow"
            style={{ bottom: `${(altitude / 3000) * 100}%` }}
          />
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
            <div className="his-label top">0</div>
            <div className="his-label right">90</div>
            <div className="his-label bottom">180</div>
            <div className="his-label left">270</div>
            <div className="his-center-dot" />
            <div
              className="his-arrow"
              style={{
                transform: `translate(-50%, -100%) rotate(${his}deg)`
              }}
            />
          </div>
        </div>

        {/* ADI */}
        <div className="adi-circle" style={{ backgroundColor: getAdiColor() }}>
        </div>
      </div>
    </div>
  );
}
