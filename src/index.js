"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello World from Express!");
});
app.get("/about", function (req, res) {
    res.send("Hello World about to Express!");
});
app.listen(8000, function () {
    console.log("New server started on port 8000");
});
