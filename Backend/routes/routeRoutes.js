import express from "express";
import {
  getRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute
} from "../controllers/routeController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRoutes);
router.get("/:id", getRouteById);
router.post("/", protect, adminOnly, createRoute);
router.put("/:id", protect, adminOnly, updateRoute);
router.delete("/:id", protect, adminOnly, deleteRoute);

export default router;
