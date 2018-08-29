const OrderModel = require("../models/OrderModel");

module.exports.list = function list(req, res) {
    OrderModel.find({})
        .exec()
        .then(orders => {
            return res.json(orders);
        });
};

module.exports.show = function show(req, res) {
    OrderModel.findById(req.params.id)
        .exec()
        .then(order => {
            return res.json(order);
        });
};

module.exports.create = function create(req, res) {
    const newOrder = new OrderModel({
        name: req.body.name,
        date: req.body.date,
        amount: req.body.amount

    });
    newOrder.save().then(savedOrder => {
        return res.json(savedOrder);
    });
};