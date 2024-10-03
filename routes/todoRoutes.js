const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.post('create-todo', todoController.CreateTodo);

module.exports = router;
