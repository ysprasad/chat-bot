import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
config();
 const app = express();
 app.use(express.json)
 app.use(morgan)
export default app;