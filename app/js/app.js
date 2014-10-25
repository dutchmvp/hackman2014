'use strict';

angular.module('FSUGame', ['ngRoute', 'FSUGame.controllers', 'ngMaterial'])

.config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'ctrlHome',
            templateUrl: 'partials/home.html'
        })
		.when('/mobile', {
            controller: 'ctrlMobile',
            templateUrl: 'partials/mobile/game.html'
        })
        .when('/leaderboard', {
            controller: 'ctrlLeaderboard',
            templateUrl: 'partials/leaderboard/main.html'
        })
        .otherwise({redirectTo: '/'});
    });
