
import { Router } from "express";
import { sum } from "../utils/sum.js";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    sample: sum(2, 3)
  });
});
