const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("Message", MessageSchema);