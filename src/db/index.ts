import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";

config({ path: ".env" });

export const db = drizzle({
  connection: {
    url: process.env.DB_CONNECTION_URL ?? "fail",
    authToken: process.env.DB_AUTH_TOKEN ?? "fail",
  },
});
