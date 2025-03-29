import React, { useState } from "react";
import { updateSensor } from "../api/sensors";
import "./InputPanel.css";

export default function InputPanel({ onClose, setAltitude, setHis, setAdi }) {
  const [altitudeInput, setAltitudeInput] = useState("");
  const [hisInput, setHisInput] = useState("");
  const [adiInput, setAdiInput] = useState("");
  const [error, setError] = useState("");

  const handleSend = async () => {
    const alt = parseInt(altitudeInput);
    const his = parseInt(hisInput);
    const adi = parseInt(adiInput);

    if (isNaN(alt) || alt < 0 || alt > 3000) {
      setError("Altitude must be between 0 and 3000");
      return;
    }

    if (isNaN(his) || his < 0 || his > 360) {
      setError("HIS must be between 0 and 360");
      return;
    }

    if (isNaN(adi) || adi < -100 || adi > 100) {
      setError("ADI must be between -100 and 100");
      return;
    }

    await updateSensor("altitude", alt);
    await updateSensor("his", his);
    await updateSensor("adi", adi);
    setAltitude(alt);
    setHis(his);
    setAdi(adi);
    onClose();
  };

  return (
    <div className="input-panel">
      <div className="input-row">
        <label>Altitude</label>
        <input
          type="text"
          value={altitudeInput}
          onChange={(e) => setAltitudeInput(e.target.value)}
          placeholder="0 - 3000"
        />
      </div>

      <div className="input-row">
        <label>HIS</label>
        <input
          type="text"
          value={hisInput}
          onChange={(e) => setHisInput(e.target.value)}
          placeholder="0 - 360"
        />
      </div>

      <div className="input-row">
        <label>ADI</label>
        <input
          type="text"
          value={adiInput}
          onChange={(e) => setAdiInput(e.target.value)}
          placeholder="-100 - 100"
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button className="send-button" onClick={handleSend}>
        SEND
      </button>
    </div>
  );
}
