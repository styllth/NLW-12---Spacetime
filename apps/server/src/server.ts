import "dotenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: true,
});

app.get("/users", async () => {
  const users = await prisma.user.findMany();
  return users;
});

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 HTTP server running on port http://localhost:3333");
  });
