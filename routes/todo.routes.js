const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.post("/", todoController.createTodo);
router.put("/:todoId", todoController.updateTodo);
router.delete("/:todoId", todoController.deleteTodo);
router.get("/", todoController.getTodos);
router.get("/:todoId", todoController.getTodoById);

module.exports = router;
