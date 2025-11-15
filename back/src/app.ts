import "dotenv/config";
import express from "express";
import globalRouter from "./routes/routes";
import { swaggerDocs } from "./config/swagger";
const buildServer = () => {
  const server = express();
  server.use(express.json());
  server.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Server run",
    });
  });
  server.use("/api", globalRouter);
  swaggerDocs(server);
  return server;
};
export default buildServer;
