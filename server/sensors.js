const express = require("express");
const router = express.Router();

let sensorData = {
  altitude: 1500,
  his: 180,
  adi: 0,
};

router.get("/altitude", (req, res) => {
  res.json({ value: sensorData.altitude });
});
router.get("/his", (req, res) => {
  res.json({ value: sensorData.his });
});
router.get("/adi", (req, res) => {
  res.json({ value: sensorData.adi });
});

router.post("/altitude", (req, res) => {
  sensorData.altitude = req.body.value;
  res.json({ status: "ok" });
});
router.post("/his", (req, res) => {
  sensorData.his = req.body.value;
  res.json({ status: "ok" });
});
router.post("/adi", (req, res) => {
  sensorData.adi = req.body.value;
  res.json({ status: "ok" });
});

module.exports = router;
