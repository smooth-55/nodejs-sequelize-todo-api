const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('create-todo', todoController.CreateTodo);
router.get('todos', todoController.GetAllTodos);
router.get('todo/:id', todoController.GetOneTodo);
router.put('todo/:id', todoController.UpdateOneTodoById);

module.exports = router;
