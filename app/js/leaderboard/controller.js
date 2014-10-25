angular.module('FSUGame.controllers')


    .controller('ctrlLeaderboard', ['$scope','$interval', function ($scope,$interval) {
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
        
        // counter down timer //
        $scope.counter = 180;
        $scope.nearEnd = false;
        
        $scope.winner = {}
        $scope.gameRunning = false;
      
        $scope.getRandomSpan = function(){
          return Math.floor(Math.random() * 50) + 1
        }
                var start = $interval(function() {

            if($scope.counter !== 0) {
                $scope.counter--;
                $scope.gameRunning = true;

                $scope.playersAmount = $scope.players.length;
               

                
                 $scope.players[0] = 
                    {
                        name:'jason staerck',
                        avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                        score: $scope.getRandomSpan()
                    }
                     
                

                if($scope.counter < 30) {
                   
                    $scope.nearEnd = true;
                    
                } 
            } else {
                $scope.gameRunning = false;
                $scope.winner.name = 'peter';
                $interval.cancel(start);
                
            }
        
        },180);
        
        // ******************* //
    }]);

