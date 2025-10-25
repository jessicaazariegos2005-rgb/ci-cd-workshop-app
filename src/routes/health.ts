import { Router, type Request, type Response } from "express";
import { sum } from "../utils/sum.js";

export const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    sample: sum(2, 3),
  });
});
