import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DB_CONNECTION_URL || !process.env.DB_AUTH_TOKEN) {
  throw new Error("Missing DB connection and auth token in the environment");
}

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DT_CONNECTION_URL ?? "fail",
    authToken: process.env.DB_AUTH_TOKEN ?? "fail",
  },
  migrations: {
    table: "__drizzle_migration",
    schema: "public",
  },
  verbose: true,
  strict: true,
});
