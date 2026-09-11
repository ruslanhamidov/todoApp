import express from 'express';
const tasksRouter = express.Router();
import { getTasks, createTask, changeTask, deleteTask } from '../controllers/tasksController.js'

tasksRouter.get('/', getTasks);
tasksRouter.post('/', createTask);
tasksRouter.put('/:id', changeTask);
tasksRouter.delete('/:id', deleteTask);

export default tasksRouter;
