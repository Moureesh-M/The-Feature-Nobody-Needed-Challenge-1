let nextId = 1;
const tasks = [];

exports.getTasks = (req, res) => {
  const orderedTasks = [...tasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  res.json(orderedTasks);
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const task = tasks.find((item) => item.id === parseInt(id, 10));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = Boolean(completed);
  res.json(task);
};
