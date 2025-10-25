
import express from "express";
import { healthRouter } from "./routes/health.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/health", healthRouter);

app.get("/", (_req, res) => {
  res.json({ message: "CI/CD Workshop App - OK" });
});

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});

export default app;
