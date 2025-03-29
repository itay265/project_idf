import React, { useEffect, useState } from "react";
import { getSensor, updateSensor } from "../api/sensors";

export default function ADI() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    getSensor("adi").then(setValue);
  }, []);

  const handleUpdate = () => {
    const newValue = prompt("Enter new ADI (-100 to 100):");
    const val = parseInt(newValue);
    if (!isNaN(val) && val >= -100 && val <= 100) {
      updateSensor("adi", val);
      setValue(val);
    } else {
      alert("Value must be between -100 and 100.");
    }
  };

  return (
    <div className="adi-box">
      <h2>ADI</h2>
      <p>{value}°</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
