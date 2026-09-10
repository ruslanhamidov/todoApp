const tasks = [
  {title: 'Do homework', done: 'false'},
  {title: 'Do dishes', done: 'false'},
  {title: 'Go for a walk', done: 'false'},
  {title: 'Take medicine', done: 'false'},
]

export const getTasks = (req, res) => {
  res.status(201).json(tasks);
}
