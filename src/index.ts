import { serve } from "@hono/node-server";
import app from "./api/api";

console.log(`🚀 Starting server on http://localhost:3000`);
serve(app);
