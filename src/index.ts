import express, { type Request, type Response } from "express";
import { healthRouter } from "./routes/health.js";

const app = express();

// Middleware para leer JSON
app.use(express.json());

// ✅ Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// ✅ Rutas API
app.use("/health", healthRouter);

// ✅ Ruta principal (solo si alguien accede a "/api" directamente)
app.get("/api", (_req: Request, res: Response) => {
  res.json({ message: "API funcionando correctamente 🚀" });
});

// ✅ Ruta raíz — devuelve JSON, pero el navegador mostrará tu index.html
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "CI/CD Workshop App - OK" });
});

export default app;
