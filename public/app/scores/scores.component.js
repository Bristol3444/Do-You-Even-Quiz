"use strict";
 const scores = {
     templateUrl: `scores/scores.html`,
     controller: ["QuizService", function(QuizService) {
            const vm = this;
         QuizService.getScores().then(function (response) {
             console.log(response);
             vm.scoresList = response.data;
         })
     }]
 }
 angular.module("QuizModule").component("scores", scores);