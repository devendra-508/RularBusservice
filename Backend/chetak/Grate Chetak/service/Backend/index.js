const { onRequest } = require("firebase-functions/v2/https");
const { app, connectDatabase } = require("./server");

exports.api = onRequest({ region: "asia-south1" }, async (req, res) => {
  try {
    await connectDatabase();
    return app(req, res);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return res.status(503).json({
      success: false,
      message: "Database is temporarily unavailable",
    });
  }
});
