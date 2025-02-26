import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";


if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error("database url not found");
}

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL) as any;

export const db = drizzle(sql);