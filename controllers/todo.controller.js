const TodoModel = require("../models/todo.model");

exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (error) {
    next(error);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find();
    res.status(200).json(allTodos);
  } catch (error) {
    next(error);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const todoById = await TodoModel.findById(req.params.todoId);
    if (todoById === null) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(todoById);
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.todoId, req.body, { new: true, useFindAndModify: false });
    if (updatedTodo === null) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);
    if (deletedTodo === null) return res.status(404).json({ message: "not found" });
    res.status(200).json(deletedTodo);
  } catch (error) {
    next(error);
  }
};
