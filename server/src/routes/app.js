const express = require('express');
const router = express.Router();

// controllers
const todoController = require('../controllers/todo.controller');

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
