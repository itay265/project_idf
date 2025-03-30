# ✈️ Flight Monitor – Real-Time Aircraft Data Display

## Overview

This project is a full-stack flight monitoring system designed to visualize three critical aircraft parameters in real-time: **Altitude**, **HIS (Compass)**, and **ADI (Attitude Direction Indicator)**. The application offers both a **TEXT** and **VISUAL** mode for displaying sensor values, and a **+** button that opens a form to manually update them. The system is built using **React** for the frontend, **Node.js + Express** for the backend, and **MongoDB** as the database.

---

## Features

- Display of real-time flight data for Altitude, HIS, and ADI
- Toggle between TEXT and VISUAL display modes
- Manual input form to update values
- Input validation and error messages for out-of-range values
- Dynamic color updates based on ADI value
- Compass (HIS) rotates the circle, while arrow remains fixed
- Altitude graph moves blue arrow based on height
- Full integration between client, server, and database

---

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB (local)
- CSS (custom styling and animations)

---

## Project Structure

- `/client` – React frontend
  - `components/` – Includes Altitude, HIS, ADI, InputPanel, VisualDisplay, TextDisplay
  - `api/sensors.js` – Handles API calls to the backend
- `/server` – Node.js backend
  - `app.js` – Main server file
  - `models/Sensor.js` – Mongoose schema
  - `routes/sensors.js` – REST API routes

---

## Display Modes

### TEXT Mode
Displays the three parameters in clean, labeled oval displays. This mode is readable and simple.

### VISUAL Mode
- **Altitude**: Vertical bar showing current height via a horizontal blue arrow and value labels (0–3000).
- **HIS**: A circular compass where the circle rotates based on the angle (0–360), but the orange arrow stays fixed pointing up. Labels (`0`, `90`, `180`, `270`) rotate with the circle but remain upright.
- **ADI**: Circular indicator that changes background color:
  - `0` → Green
  - `100` → Blue
  - Values in-between → Gradient between green and blue
  - Negative values → Shades of green

### Input Form (+)
Clicking the "+" button opens a form with fields for each parameter. Upon submission:
- Values are validated and restricted to these ranges:
  - Altitude: 0–3000
  - HIS: 0–360
  - ADI: -100 to 100
- Valid values update both the UI and MongoDB
- Invalid input shows a relevant error message

---

## Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/flight-monitor
cd flight-monitor


Run the Server:
cd server
npm install
npm start


Run the Client:
cd ../client
npm install
npm start
