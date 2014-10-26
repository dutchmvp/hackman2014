angular.module('FSUGame.controllers')

    .controller('ctrlCreateGame', ['$scope', '$rootScope', 'GameService', '$location', function ($scope, $rootScope, GameService, $location) {
		$rootScope.game = {
            $id: null,
            name: null,
            gameStatus: 'Lobby',
            timeLeft: 10
        };
        
        var gameNameCheck = function(gameName) {
            if (gameName && gameName.length > 3) {
                document.getElementById('createGame').classList.add('enabled');
                document.getElementById('gameNameError').style.display = 'none';
                
                return true;
            }
            else if (gameName && document.getElementById('createGame')) {
                document.getElementById('createGame').classList.remove('enabled');
                
                document.getElementById('gameNameError').style.display = 'block';
                document.getElementById('gameNameError').innerHTML = 'Your name needs to be more than 3 characters';
            }
            
            return false;
        };
        
		$rootScope.$watch('game.name', gameNameCheck());
        
        $scope.startGame = function() {
            if (gameNameCheck($rootScope.game.name)) {
                // create game
                GameService.create($rootScope.game).then(function(response) {
                    $rootScope.game.$id = response.$id;
                                        
                    $location.path('/leaderboard/' + $rootScope.game.$id);
                });
            }
        };
    }])

    .controller('ctrlLeaderboard', ['$scope', '$rootScope', 'GameService', '$location', '$routeParams', '$timeout', function ($scope, $rootScope, GameService, $location, $routeParams, $timeout) {
        if (!$routeParams.gameId) {
            // user has no details or no game ID - cannot join
            $location.path('/leaderboard/');
            return;
        }
        
        var refreshInterval;
        
        $scope.annouceWinner = function() {
             
        };
        
        $scope.players = [];
        $scope.nearEnd = false;
        $scope.winner = { };
        
      
        // get game from URL
        GameService.get($routeParams.gameId).then(function(response) {
            if (!response) {
                // game does not exist
                $location.path('/leaderboard/');
                return;   
            }
            
            $rootScope.game = response;

            // on player join
            GameService.onJoin($rootScope.game.$id, function(player) {
                // temp add avator
                player.client.avatar = 'http://robohash.org/' + player.client.key + '.png?set=set1&size=46x46';

                $scope.players.push(player.client);
            });
            
            GameService.onScoreUpdate($rootScope.game.$id, function(player) {                
                for (var i = 0; i < $scope.players.length; i++) {                    
                    if ($scope.players[i].key == player.client.key) {
                        $scope.players[i].score = player.client.score;
                    }
                }
            });
            
            if ($rootScope.game.gameStatus == 'Winner') {
                $scope.annouceWinner();
            }

            $scope.startGame = function() {
                if ($scope.players.length >= 1) {
                    $rootScope.game.gameStatus = 'Waiting';

                    GameService.update($rootScope.game.$id, $rootScope.game).then(function(response) {                 
                        var timeoutFunc = function() {
                            $rootScope.$apply(function(){
                                $rootScope.game.timeLeft--;
                            });

                            if ($rootScope.game.timeLeft < 20) {
                                $scope.nearEnd = true;   
                            }

                            // time has run out!
                            if ($rootScope.game.timeLeft < 1) {
                                if ($rootScope.game.gameStatus == 'Waiting') {
                                    // start game
                                    $rootScope.game.timeLeft = 10;
                                    $rootScope.game.gameStatus = 'Playing';
                                }
                                else {
                                    // game end
                                    $rootScope.game.gameStatus = 'Winner';
                                }
                            }

                            // update game for everyone
                            GameService.update($rootScope.game.$id, $rootScope.game).then(function(response) {                        
                                if ($rootScope.game.gameStatus != 'Winner') {
                                    $timeout(timeoutFunc, 1000);
                                }
                                else {
                                    // send to winner page
                                    $scope.annouceWinner();
                                }
                            });
                        };

                        $timeout(timeoutFunc, 1000);
                    });
                }
                else {
                    alert('Not enough players to start the game');
                }
            };
        });
    }]);