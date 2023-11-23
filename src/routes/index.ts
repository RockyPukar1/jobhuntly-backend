import express from "express";
const router = express();

// route import
import homeRoutes from "./home.route";
import authRoutes from "./auth.routes";
import userRoutes from "./user.route";

// http://localhost:3005/api/v1
router.use(homeRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes)

export default router;