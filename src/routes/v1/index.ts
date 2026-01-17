/** @copyright 2026 ssr0016 */
/** @license Apache-2.0 */

/** Node modules */
import { Router } from "express";

const router = Router();

/**
 * Routes
 */
import authRoutes from "@/routes/v1/auth";

/** Root route */
router.get("/", (req, res) => {
  res.status(200).json({
    message: "API is live",
    status: "ok",
    version: "1.0.0",
    docs: "https://docs.blog.ssr0016.com",
    timestamp: new Date().toISOString(),
  });
});

router.use("/auth", authRoutes);

export default router;
