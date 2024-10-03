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


module.exports = { CreateTodo };
