angular.module('FSUGame.controllers')

    .controller('ctrlLeaderboard', ['$scope', function ($scope) {
		/*
         * States:
         *  - 0: Click to start game
         *  - 1: Waiting room
         *  - 2: Playing
         *  - 3: Game end
         */

        $scope.state = 0;
        
        // when user clicks start game - create game in firebase
        $scope.startGame = function() {
               
        };
    }]);

