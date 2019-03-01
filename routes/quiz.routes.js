"use strict";
const { Router } = require("express");
const quiz = Router();
const pool = require("./connection");

function selectAll(req, res) {
    pool.query("select * from questionlist order by random() limit 5").then(function(result) {
        res.send(result.rows);
    });
}
quiz.get("/quiz", (req, res) => {
    selectAll(req, res);
    console.log("GET");
})

module.exports = quiz;