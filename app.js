import dns from 'dns';
dns.setServers(['0.0.0.0', '8.8.4.4']);

import express from "express";
import tasks from "./routes/tasks.js"
import mongoose from "mongoose"
import { MONGO_URI } from "./config.js";

const app = express();

try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not able to connect to database.", error);
  }

app.use('/api/tasks', tasks)
app.use(express.json())

export default app;
