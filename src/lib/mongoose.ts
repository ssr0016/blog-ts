/** @copyright 2026 ssr0016 */
/** @license Apache-2.0 */

/** Node modules */
import mongoose from "mongoose";

/**
 * Custom modules
 */
import config from "@/config";
import { logger } from "@/lib/winston";

/**
 * Types
 */
import type { ConnectOptions } from "mongoose";

/**
 * Client option
 */
const clientOptions: ConnectOptions = {
  dbName: "blog-db",
  appName: "blog",
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

/**
 * Establishes a connection to the Mongoose database using Mongoose.
 * If an error occurs during the connection process, it throws an error with a descriptive message
 *
 * Uses `MONGO_URI` as the connection string.
 * `clientOptions` contains additional configuration for Mongoose.
 * Errors are properly handled and rethrown for better debugging.
 */

export const connectToDatabase = async (): Promise<void> => {
  if (!config.MONGO_URI) {
    throw new Error("MongoDB URI is not defined in the configuration");
  }

  try {
    await mongoose.connect(config.MONGO_URI, clientOptions);

    logger.info("Connected to the database sucessfully", {
      uri: config.MONGO_URI,
      options: clientOptions,
    });
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }

    logger.error("Error connecting to the database", err);
  }
};

export const disconnectFromDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();

    logger.info("Disconnected from the database sucessfully.", {
      uri: config.MONGO_URI,
      options: clientOptions,
    });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    logger.error("Error disconnecting from the database", err);
  }
};
