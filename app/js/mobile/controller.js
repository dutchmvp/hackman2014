angular.module('FSUGame.controllers')

    .controller('ctrlJoinGame', ['$scope', '$rootScope', '$location', 'GameService', 'ClientService', function ($scope, $rootScope, $location, GameService, ClientService) {
        $scope.state = 0;
        $rootScope.connection = null;
        $rootScope.user.score = 0;
        
        if ($rootScope.user.name && $rootScope.user.name.length > 0) {
            $scope.state = 1;
        }

        var usernameCheck = function(username) {            
            if (username && username.length > 3) {
                document.getElementById('continueButton').classList.add('enabled');
                document.getElementById('usernameError').style.display = 'none';
                
                return true;
            }
            else if (document.getElementById('continueButton')) {
                document.getElementById('continueButton').classList.remove('enabled');
                
                document.getElementById('usernameError').style.display = 'block';
                document.getElementById('usernameError').innerHTML = 'Your username needs to be more than 3 characters';
            }
            
            return false;
        };
        
		$rootScope.$watch('user.name', usernameCheck());
        
        $scope.continueButton = function() {
            if (usernameCheck($rootScope.user.name)) {
                $scope.state = 1;
            }
        };
        
        // Lobby pick a game
        GameService.all().then(function(response) {
            $scope.games = response;
        });
        
        $scope.joinGame = function(gameId) {  
            // create client
            ClientService.create($rootScope.user).then(function(response) {
                $rootScope.user.$id = response.name();
                $location.path('/startGame/' + gameId);
            });
        };
    }])

    .controller('ctrlStartGame', ['$scope', '$rootScope', '$location', '$routeParams', 'GameService', 'amountOfGames', function ($scope, $rootScope, $location, $routeParams, GameService, amountOfGames) {        
        if (!$rootScope.user || $rootScope.user.$id == null || !$routeParams.gameId) {
            // user has no details or no game ID - cannot join
            $location.path('/mobile/');
            return;
        }
        
        $scope.leaveGame = function() {
            GameService.leaveConnection($rootScope.connection.$id).then(function(response) {
                $rootScope.$broadcast('player-left', { player: response });
                $location.path('/mobile/');
            });
        };
        
        // join game
        GameService.join($routeParams.gameId, $rootScope.user).then(function(response) {
            $rootScope.connection = response;

            // get game details
            GameService.get($routeParams.gameId).then(function(response) {
                $rootScope.game = response;
                
                $rootScope.$watch('game.gameStatus', function(value) {
                    switch(value) {
                        case 'Playing':
                            // go to first game
                            var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
                            $location.path('/game/' + goToGame);
                        break;
                        default:
                            // just wait
                        break;
                    };
                });
            });
        });
    }])

    .controller('ctrlWinner', ['$scope', '$rootScope', 'GameService', '$location', function($scope, $rootScope, GameService, $location) {
        if (!$rootScope.game) {
            $location.path('/mobile/');
            return;
        }
        
        GameService.getAllConnections().then(function(connections) {
            $scope.highestScore = 0;

            for (var i = 0; i < connections.length; i++) {                    
                if (connections[i].gameId == $rootScope.game.$id && connections[i].client.score > $scope.highestScore) {
                    $scope.highestScore = connections[i].client.score;
                    $scope.winner = connections[i].client;
                }
            }
        });
    }]);
