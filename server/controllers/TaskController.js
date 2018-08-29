const TaskModel = require("../models/TaskModel");

module.exports.list = function list(req, res) {
    TaskModel.find({})
        .exec()
        .then(tasks => {
            return res.json(tasks);
        });
};

module.exports.show = function show(req, res) {
    TaskModel.findById(req.params.id)
        .exec()
        .then(task => {
            return res.json(task);
        });
};

module.exports.create = function create(req, res) {
    const newTask = new TaskModel({
        name: req.body.name,
        date: req.body.date,

    });
    newTask.save().then(savedTask => {
        return res.json(savedTask);
    });
};