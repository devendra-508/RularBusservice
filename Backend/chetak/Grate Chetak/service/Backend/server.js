require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

let databaseConnection;

function connectDatabase() {
  if (!process.env.MONGO_URI) {
    return Promise.reject(new Error("MONGO_URI is not configured"));
  }

  if (!databaseConnection) {
    databaseConnection = mongoose.connect(process.env.MONGO_URI).catch((error) => {
      databaseConnection = undefined;
      throw error;
    });
  }

  return databaseConnection;
}

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "My Services API is running" });
});

app.use("/api/contact", contactRoutes);

if (require.main === module) {
  connectDatabase()
    .then(() => {
      console.log("MongoDB connected");
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error.message);
      process.exit(1);
    });
}

module.exports = { app, connectDatabase };
