const MessageModel = require("../models/MessageModel");

module.exports.list = function list(req, res) {
    MessageModel.find({})
        .exec()
        .then(messages => {
            return res.json(messages);
        });
};

module.exports.show = function show(req, res) {
    MessageModel.findById(req.params.id)
        .exec()
        .then(message => {
            return res.json(message);
        });
};

module.exports.create = function create(req, res) {
    const newMessage = new MessageModel({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    });
    newMessage.save().then(savedMessage => {
        return res.json(savedMessage);
    });
};