"use strict";
angular.module("QuizModule").config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/quiz", {
            template: "<quiz></quiz>"
        })
        .when("/scores", {
            template: "<scores></scores>"
        })
}]);