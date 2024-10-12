import express from 'express';
import { PrismaClient } from '@prisma/client';
import routes from './src/routes.js'
import cors from 'cors'


const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your front-end URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use(express.json());

routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
