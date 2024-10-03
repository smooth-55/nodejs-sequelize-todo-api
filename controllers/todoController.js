const Todo = require('../models/todoModel');
const { response } = require('../response/response');
const { TodoSchema } = require('../validators/todoValidator');


// Create a New Todo
const CreateTodo = async (req, res) => {
    try {
        const { error, value } = TodoSchema.validate(req.body);
        if (error) {
            response.BadReqest(res, error.details[0].message)
        }
        const newTodo = await Todo.create({
            title: value?.title,
            description: value?.description,
            status: value?.status
        });
        response.Created(res, newTodo, "Todo created successfully")
    } catch (err) {
        response.InternalServerError(res, err.message)
    }
};

// Get All Todos
const GetAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        response.SuccessData(res, todos, "Todo fetched successfully")

    } catch (err) {
        response.InternalServerError(res, err.message)
    }
};

// Get Todo by ID
const GetOneTodo = async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);
        if (!todo) return response.NotFound(res, 'Todo Not found')
        response.SuccessData(res, todo, "Todo fetched successfully")
    } catch (err) {
        response.InternalServerError(res, err.message)
    }
};

module.exports = { CreateTodo, GetAllTodos, GetOneTodo };
