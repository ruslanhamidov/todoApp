import Task from "../models/task.js"
import {generateId} from "../utils/helpers.js"

export const getTasks = async (req, res) => {
  const tasks = await Task.find({})
  res.status(201).json(tasks);
}

export const createTask = async (req, res) => {
  const task = new Task({ id: generateId(), title: req.body.title, status: req.body.status })
  await task.save()
  res.status(201).json({message: "Task created successfully"})
}

export const changeTask = async (req, res) => {
  const id = req.params.id
  const task = await Task.findOne({ id })
  task.title = req.body.title || task.title
  task.status = req.body.status || task.status
  await task.save();

  res.json({message: "Task was updated successfully"})
}

export const deleteTask = async (req, res) => {
  const id = req.params.id
  await Task.deleteOne({id});

  res.json({message: "Task was deleted successfully"})
}
