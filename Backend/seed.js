import mongoose from "mongoose";
import dotenv from "dotenv";
import Route from "./models/Route.js";

dotenv.config();

const sampleRoutes = [
  {
    busName: "Dehradun Rural Express",
    busNumber: "UK07RB1001",
    from: "Dehradun",
    to: "Rishikesh",
    departureTime: "07:30 AM",
    arrivalTime: "09:00 AM",
    durationMinutes: 90,
    fare: 80,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Doiwala", "Bhaniawala"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  },

  {
    busName: "Haridwar Rural Bus",
    busNumber: "UK08RB1001",
    from: "Haridwar",
    to: "Rishikesh",
    departureTime: "06:30 AM",
    arrivalTime: "07:30 AM",
    durationMinutes: 60,
    fare: 60,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Mini",
    stops: ["Jwalapur", "Kankhal"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  },

  {
    busName: "Uttarkashi Mountain Bus",
    busNumber: "UK10RB1001",
    from: "Dehradun",
    to: "Uttarkashi",
    departureTime: "06:00 AM",
    arrivalTime: "12:00 PM",
    durationMinutes: 360,
    fare: 250,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Mussoorie", "Dhanaulti", "Chamba", "Dharasu"],
    daysOfOperation: ["Mon", "Wed", "Fri", "Sun"],
    isActive: true
  },

  {
    busName: "Chamoli Garhwal Bus",
    busNumber: "UK11RB1001",
    from: "Rishikesh",
    to: "Gopeshwar",
    departureTime: "05:30 AM",
    arrivalTime: "01:00 PM",
    durationMinutes: 450,
    fare: 320,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Devprayag", "Srinagar", "Rudraprayag", "Karanprayag"],
    daysOfOperation: ["Mon", "Tue", "Thu", "Sat"],
    isActive: true
  },

  {
    busName: "Rudraprayag Valley Bus",
    busNumber: "UK13RB1001",
    from: "Rishikesh",
    to: "Rudraprayag",
    departureTime: "06:00 AM",
    arrivalTime: "11:00 AM",
    durationMinutes: 300,
    fare: 240,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Devprayag", "Srinagar", "Kirtinagar"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  },

  {
    busName: "Tehri Hill Rider",
    busNumber: "UK09RB1001",
    from: "Rishikesh",
    to: "New Tehri",
    departureTime: "07:00 AM",
    arrivalTime: "11:00 AM",
    durationMinutes: 240,
    fare: 180,
    totalSeats: 30,
    availableSeats: 30,
    busType: "Mini",
    stops: ["Narendranagar", "Chamba"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  },

  {
    busName: "Pauri Garhwal Express",
    busNumber: "UK12RB1001",
    from: "Rishikesh",
    to: "Pauri",
    departureTime: "06:30 AM",
    arrivalTime: "11:30 AM",
    durationMinutes: 300,
    fare: 220,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Devprayag", "Srinagar", "Satpuli"],
    daysOfOperation: ["Mon", "Wed", "Fri", "Sun"],
    isActive: true
  },

  {
    busName: "Kumaon Mountain Bus",
    busNumber: "UK05RB1001",
    from: "Haldwani",
    to: "Pithoragarh",
    departureTime: "05:30 AM",
    arrivalTime: "01:30 PM",
    durationMinutes: 480,
    fare: 350,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Almora", "Bageshwar", "Didihat"],
    daysOfOperation: ["Tue", "Thu", "Sat"],
    isActive: true
  },

  {
    busName: "Bageshwar Kumaon Bus",
    busNumber: "UK02RB1001",
    from: "Haldwani",
    to: "Bageshwar",
    departureTime: "06:00 AM",
    arrivalTime: "11:30 AM",
    durationMinutes: 330,
    fare: 250,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Bhowali", "Almora", "Kausani"],
    daysOfOperation: ["Mon", "Wed", "Fri", "Sun"],
    isActive: true
  },

  {
    busName: "Almora Rural Express",
    busNumber: "UK01RB1001",
    from: "Haldwani",
    to: "Almora",
    departureTime: "07:00 AM",
    arrivalTime: "11:00 AM",
    durationMinutes: 240,
    fare: 180,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Kathgodam", "Bhowali", "Kainchi"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  },

  {
    busName: "Nainital Hill Bus",
    busNumber: "UK04RB1001",
    from: "Haldwani",
    to: "Nainital",
    departureTime: "07:00 AM",
    arrivalTime: "09:00 AM",
    durationMinutes: 120,
    fare: 80,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Mini",
    stops: ["Kathgodam", "Bhowali"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  },

  {
    busName: "Champawat Kumaon Rider",
    busNumber: "UK03RB1001",
    from: "Haldwani",
    to: "Champawat",
    departureTime: "06:00 AM",
    arrivalTime: "12:30 PM",
    durationMinutes: 390,
    fare: 280,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Lohaghat", "Tanakpur"],
    daysOfOperation: ["Mon", "Wed", "Fri", "Sun"],
    isActive: true
  },

  {
    busName: "Kumaon Rural Connector",
    busNumber: "UK06RB1001",
    from: "Haldwani",
    to: "Rudrapur",
    departureTime: "08:00 AM",
    arrivalTime: "09:30 AM",
    durationMinutes: 90,
    fare: 70,
    totalSeats: 40,
    availableSeats: 40,
    busType: "Standard",
    stops: ["Lalkuan", "Pantnagar"],
    daysOfOperation: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    isActive: true
  }
];

const seedRoutes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected for seeding...");

    await Route.deleteMany({});
    console.log("Cleared existing routes");

    const inserted = await Route.insertMany(sampleRoutes);

    console.log(`Inserted ${inserted.length} Uttarakhand bus routes`);

    await mongoose.disconnect();

    console.log("Done. Disconnected from MongoDB.");

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

seedRoutes();