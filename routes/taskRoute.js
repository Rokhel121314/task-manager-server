const express = require("express");
const {
  createTask,
  getTasks,
  getATask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const Task = require("../models/taskModel");

const router = express.Router();

//   Create Task
router.post("/api/tasks", createTask);

// Get all Task data
router.get("/api/tasks", getTasks);

// Get a Task data
router.get("/api/tasks/:id", getATask);

// Delete Task
router.delete("/api/tasks/:id", deleteTask);

// Update task
router.put("/api/tasks/:id", updateTask);

module.exports = router;
