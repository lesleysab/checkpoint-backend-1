let express = require("express");
const app = express();
let bodyParser = require("body-parser");
var fs = require('fs')
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://lesleysab:Murphydog1@ds113505.mlab.com:13505/checkpoint-1"
);

let OrderRoute = require("./routes/OrderRoute");
let TaskRoute = require("./routes/TaskRoute");
let MessageRoute = require("./routes/MessageRoute");

app.use(bodyParser.json());
app.use(OrderRoute);
app.use(MessageRoute);
app.use(TaskRoute);

app.get("/dateTime", function (req, res) {
    return res.json(Date());
});


fs.readFile('server/data.csv', 'utf8', function (err, data) {

    if (err) {
        return console.log(err)
    }
    const csv = data.split(",")
    const newComments = csv[3]

    app.get("/newComments", function (req, res) {
        return res.json(Number(newComments.slice(8)));
    });
    app.get("/newTasks", function (req, res) {
        return res.json(Number(csv[4]));
    });
    app.get("/newOrders", function (req, res) {
        return res.json(Number(csv[5]));
    });
    app.get("/tickets", function (req, res) {
        return res.json(Number(csv[6]));
    });
})

app.get("/foxes", function (req, res) {

    const fetch = require('node-fetch');
    fetch('https://randomfox.ca/floof/')

        .then(res => res.json())
        .then(data => {
            return res.json(data.image);
        });
});




app.listen(3001, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Yo!");
});