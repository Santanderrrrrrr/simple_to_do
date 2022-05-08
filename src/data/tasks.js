
const tasks = [
  {
    _id: "1",
    title: "Take Trash Out",
    completed: false,
  },
  {
    _id: "2",
    title: "Do the dishes",
    completed: false,
  },
  {
    _id: "3",
    title: "Laundry",
    completed: false,
  }
];

export function getTasks() {
  return tasks;
}

export function getTask(id) {
  return tasks.find(t => t._id === id);
}

export function savetask(task) {
  let taskInDb = tasks.find(t => t._id === task._id) || {};
  taskInDb.title = task.title;
  

  if (!taskInDb._id) {
    taskInDb._id = Date.now();
    tasks.push(taskInDb);
  }

  return taskInDb;
}

export function deletetask(id) {
  let taskInDb = tasks.find(t => t._id === id);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}
