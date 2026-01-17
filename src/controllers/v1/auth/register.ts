/** @copyright 2026 ssr0016 */
/** @license Apache-2.0 */

/**
 * Custom modules
 */
import { logger } from "@/lib/winston";

/**
 * Models
 */

/**
 * Types
 */
import type { Request, Response } from "express";

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(201).json({
      message: "New user created",
    });
  } catch (err) {
    res.status(500).json({
      code: "ServerError",
      message: "Internal server error",
      error: err,
    });

    logger.error("Error during user registration", err);
  }
};

export default register;
