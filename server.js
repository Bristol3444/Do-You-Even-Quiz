"use strict";
const express = require("express");
const app = express();
const quiz = require("./routes/quiz.routes");
const scores = require("./routes/scores.routes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", quiz);
app.use("/", scores);



app.listen(8050, _ => {
    console.log("the server is running");
})