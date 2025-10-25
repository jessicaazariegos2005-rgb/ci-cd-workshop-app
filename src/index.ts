import express, { type Request, type Response } from "express";
import { healthRouter } from "./routes/health.js";

const app = express();

app.use(express.json());
app.use("/health", healthRouter);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "CI/CD Workshop App - OK" });
});

export default app;
