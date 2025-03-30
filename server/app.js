const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const sensorsRoutes = require("./sensors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", sensorsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Flight Monitor API is running ✅");
  });
  