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
    self.addScores = (newscore) => {
        return $http({
            method: "POST",
            url: "/scores",
            data: {...newscore}
        })
    }
}
angular.module("QuizModule").service("QuizService", QuizService);