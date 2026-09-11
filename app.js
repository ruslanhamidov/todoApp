import express from "express";
import tasks from "./routes/tasks.js"
import mongoose from "mongoose"
import { MONGO_URI } from "./config.js";

const app = express();

try {
    await mongoose.connect(MONGO_URI);
    await mongoose.connection.db.dropDatabase();
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not able to connect to database.", error);
  }

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/tasks', tasks)

export default app;
