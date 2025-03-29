import React, { useEffect, useState } from "react";
import { getSensor, updateSensor } from "../api/sensors";

export default function HIS() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    getSensor("his").then(setValue);
  }, []);

  const handleUpdate = () => {
    const newValue = prompt("Enter new HIS (0–360):");
    const val = parseInt(newValue);
    if (!isNaN(val) && val >= 0 && val <= 360) {
      updateSensor("his", val);
      setValue(val);
    } else {
      alert("Value must be between 0 and 360.");
    }
  };

  return (
    <div className="his-box">
      <h2>HIS</h2>
      <p>{value}°</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
