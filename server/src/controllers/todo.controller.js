const Todos = require('../models/todo.models');
const catchAsync = require('../utils/catchAsync');

// obtener todos los todos --> get
exports.getAllTodos = catchAsync(async (req, res) => {
    const todos = await Todos.findAll();
    res.status(200).json({
        status: 'success',
        data: {
            todos
        }
    });
});

// crear un todo 
exports.createTodo = catchAsync(async (req, res) => {
    const { content } = req.body;
    await Todos.create({ content });
    res.status(201).json({
        status: 'success'
    });
});

// editar un todo
exports.updateTodo = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const idExists = await Todos.findOne({ where: { id } });
    if (idExists) {
        await Todos.update({ content }, { where: { id } });
        res.status(200).json({
            status: 'success'
        })
    } else {
        res.status(404).json({
            status: 'fail',
            message: 'Id not found'
        });
    };
});

// eliminar un todo
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    const idExists = await Todos.findOne({ where: { id } });

    if (idExists) {
        await Todos.destroy({ where: { id } });
        res.status(200).json({
            status: 'success'
        });
    } else {
        res.status(404).json({
            status: 'fail',
            message: 'Id not found'
        });
    };
};