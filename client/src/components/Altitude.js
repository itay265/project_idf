import React from "react";
import { updateSensor } from "../api/sensors";

export default function Altitude({ value, setValue }) {
  const handleUpdate = () => {
    const newValue = prompt("Enter new Altitude (0–3000):");
    const val = parseInt(newValue);
    if (!isNaN(val) && val >= 0 && val <= 3000) {
      updateSensor("altitude", val);
      setValue(val);
    } else {
      alert("Value must be between 0 and 3000.");
    }
  };

  return (
    <div className="sensor-box">
      <h2>Altitude</h2>
      <p>{value} ft</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
