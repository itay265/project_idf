const BASE_URL = "http://localhost:5000/api";

export async function getSensor(sensor) {
  const res = await fetch(`${BASE_URL}/${sensor}`);
  const data = await res.json();
  return data.value;
}

export async function updateSensor(sensor, value) {
  await fetch(`${BASE_URL}/${sensor}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value }),
  });
}
