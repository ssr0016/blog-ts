/** @copyright 2026 ssr0016 */
/** @license Apache-2.0 */

/** Node modules */
import { Router } from "express";

const router = Router();

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

export default router;
