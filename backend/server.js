
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

app.use("/api/auth", authRoutes);
app.post("/api/auth/register", (req, res) => {
  console.log("✅ DIRECT REGISTER WORKING");
  res.json({ message: "Direct working" });
});
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});