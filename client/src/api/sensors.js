const BASE_URL = "http://localhost:5000/api";

export async function getSensor(sensor) {
  try {
    const res = await fetch(`${BASE_URL}/${sensor}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data.value;
  } catch (error) {
    console.error(`❌ Failed to fetch ${sensor}:`, error.message);
    return null; 
  }
}

export async function updateSensor(sensor, value) {
  try {
    await fetch(`${BASE_URL}/${sensor}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });
  } catch (error) {
    console.error(`❌ Failed to update ${sensor}:`, error.message);
  }
}
