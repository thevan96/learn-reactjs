const express = require("express");

const Todo = require("../schema/Todo");
const Status = require("../Utils/Status");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(Status.Success({ todos }));
  } catch (error) {
    res.json(Status.Fail(error));
  }
});

route.post("/", async (req, res) => {
  const { text } = req.body;

  const newTodo = new Todo({ text });

  try {
    const isCreateTodo = await newTodo.save();
    res.json(Status.Success(isCreateTodo));
  } catch (error) {
    res.json(Status.Fail(error));
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    res.json(Status.Success(todo));
  } catch (error) {
    res.json(Status.Fail(error));
  }
});

route.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = await Todo.findById(id);

    const isUpdate = await Todo.findByIdAndUpdate(id, {
      $set: { completed: !completed },
    });

    res.json(Status.Success(isUpdate));
  } catch (error) {
    res.json(Status.Fail(error));
  }
});

module.exports = route;
