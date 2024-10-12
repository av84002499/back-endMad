import express from 'express';
import { PrismaClient } from '@prisma/client';
import routes from './src/routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix: Correct CORS configuration
app.use(cors({
  origin: 'https://front-endfront.vercel.app', // Allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/uploads/:img", (req, res) => {
  const img = req.params.img;
  const filePath = path.join(__dirname, "./uploads", img);
  res.sendFile(filePath);
});

app.use(express.json());

routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
