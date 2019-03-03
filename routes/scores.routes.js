"use strict";
const { Router } = require("express");
const scores = Router();
const pool = require("./connection");

function selectAll(req, res) {
    pool.query("select * from scores order by score desc limit 10").then(function(result) {
        res.send(result.rows);
    });
}
scores.get("/scores", (req, res) => {
    selectAll(req, res);
    console.log("SCORES GET");
})
scores.post("/scores", (req, res) => {
    pool.query("insert into scores (player_name, score) values ($1::text, $2::int)", [req.body.player_name, req.body.score]).then(function() {
        selectAll(req, res);
        console.log("POST SCORES");
    })
})

module.exports = scores;