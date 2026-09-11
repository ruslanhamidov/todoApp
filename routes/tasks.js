import express from 'express';
const tasksRouter = express.Router();
import { getTasks, createTask, changeTask, deleteTask, getTask } from '../controllers/tasksController.js'

tasksRouter.get('/', getTasks);
tasksRouter.get('/:id', getTask);
tasksRouter.post('/', createTask);
tasksRouter.put('/:id', changeTask);
tasksRouter.delete('/:id', deleteTask);

export default tasksRouter;
