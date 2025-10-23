import type { Request, Response } from "express";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("Hello from Node.js running in Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
