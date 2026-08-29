import cors from 'cors';
import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFound.js';
import { healthRouter } from './routes/health.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', healthRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export { app };
