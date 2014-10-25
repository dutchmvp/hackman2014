'use strict';

angular.module('FSUGame', ['ngRoute', 'firebase', 'FSUGame.controllers', 'FSUGame.services','ngMaterial'])

    .constant('FIREBASE_URI', 'https://hackman2014.firebaseio.com/')

    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'ctrlHome',
            templateUrl: 'partials/home.html'
        })
        
        // application
		.when('/mobile', {
            controller: 'ctrlJoinGame',
            templateUrl: 'partials/mobile/joinGame.html'
        })
        .when('/startGame/:gameId', {
            controller: 'ctrlStartGame',
            templateUrl: 'partials/mobile/game.html'
        })
        .when('/leaderboard', {
            controller: 'ctrlCreateGame',
            templateUrl: 'partials/leaderboard/start-game.html'
        })
        .when('/leaderboard/:gameId', {
            controller: 'ctrlLeaderboard',
            templateUrl: 'partials/leaderboard/playing.html'
        })
        
        // games
        .when('/game/1', {
            controller: 'ctrlGame1',
            templateUrl: 'partials/games/1.html'
        })
        .when('/game/2', {
            controller: 'ctrlGame2',
            templateUrl: 'partials/games/2.html'
        })
        .when('/game/3', {
            controller: 'ctrlGame3',
            templateUrl: 'partials/games/3.html'
        })
        .when('/game/4', {
            controller: 'ctrlGame4',
            templateUrl: 'partials/games/4.html'
        })
        .when('/game/5', {
            controller: 'ctrlGame5',
            templateUrl: 'partials/games/5.html'
        })
        .when('/game/6', {
            controller: 'ctrlGame6',
            templateUrl: 'partials/games/6.html'
        })
        .when('/game/7', {
            controller: 'ctrlGame7',
            templateUrl: 'partials/games/7.html'
        })
        .when('/game/8', {
            controller: 'ctrlGame8',
            templateUrl: 'partials/games/8.html'
        })
        .when('/game/9', {
            controller: 'ctrlGame9',
            templateUrl: 'partials/games/9.html'
        })
        .when('/game/10', {
            controller: 'ctrlGame10',
            templateUrl: 'partials/games/10.html'
        })
        
        // fallback
        .otherwise({redirectTo: '/'});
    });
