import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  id: String,
  title: String,
  status: {
    type: Boolean, default: false
  }
})

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Task = mongoose.model('task', taskSchema)

export default Task;
