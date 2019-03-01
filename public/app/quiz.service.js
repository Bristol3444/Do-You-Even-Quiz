"use strict";
function QuizService($http) {
    const self = this;
    self.getQuestions = () => {
        return $http({
            method: "GET",
            url: "/quiz"
        });
    }
    self.getScores = () => {
        return $http({
            method: "GET",
            url: "/scores"
        });
    }
    self.addScores = (grade, name) => {
        return $http({
            method: "POST",
            url: "/scores",
            data: {score : grade, player_name : name}
        })
    }
}
angular.module("QuizModule").service("QuizService", QuizService);