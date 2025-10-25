// src/server.ts
import app from "./index.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
