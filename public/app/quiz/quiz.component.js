"use strict";
const quiz = {
    templateUrl: `quiz/quiz.html`,
    controller: ["QuizService", function (QuizService) {
        const vm = this;
        QuizService.getQuestions().then(function (response) {
            console.log(response);
            vm.questionList = response.data;
        })
        vm.grade = 0;
        vm.score = [
            false,
            false,
            false,
            false,
            false
        ];
        vm.selectedAnswer = (select, answer, index) => {
            if (select == answer) {
                vm.score[index] = true;
            } else {
                vm.score[index] = false;
            }
            console.log(vm.score);
            console.log(select);
        }
        vm.sendScore = (name) => {
            for (let i = 0; i < vm.score.length; i++) {
            if (vm.score[i]) {
                vm.grade++;
                }
            } 
            QuizService.addScores(vm.grade, name).then(function (response) {
            vm.scoreList = response.data;
            
            console.log(response);
            })
        }   
    }]
}

angular.module("QuizModule").component("quiz", quiz);