const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    amount: {
        type: String
    }
});

module.exports = mongoose.model("Order", OrderSchema);