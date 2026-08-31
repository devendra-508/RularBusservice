import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    const adminExists = await User.findOne({
      email: "admin@gmail.com",
    });

    if (adminExists) {
      console.log("Admin already exists");
      await mongoose.disconnect();
      return;
    }

    const admin = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      phone: "9876543210",
      password: "admin123",
      role: "admin",
    });

    console.log("Admin created successfully");
    console.log("Email:", admin.email);
    console.log("Password: admin123");
    console.log("Role:", admin.role);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

createAdmin();