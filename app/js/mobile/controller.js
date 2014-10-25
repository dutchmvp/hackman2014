angular.module('FSUGame.controllers')

    .controller('ctrlJoinGame', ['$scope', '$rootScope', '$location', 'GameService', 'ClientService', function ($scope, $rootScope, $location, GameService, ClientService) {
        $scope.state = 0;
        $rootScope.connectionId = null;
        
        // Create player details
        $rootScope.user = {
            $id: null,
            name: null,
            score: 0
        };
        
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
            if (usernameCheck($scope.user.name)) {
                $scope.state = 1;
            }
        };
        
        // Lobby pick a game
        $scope.games = GameService.all();
        
        $scope.joinGame = function(gameId) {  
            // create client
            ClientService.create($rootScope.user).then(function(response) {
                $rootScope.user.$id = response.name();
                $location.path('/startGame/' + gameId);
            });
        };
    }])

    .controller('ctrlStartGame', ['$scope', '$rootScope', '$location', '$routeParams', 'GameService', function ($scope, $rootScope, $location, $routeParams, GameService) {        
        if (!$rootScope.user || $rootScope.user.$id == null || !$routeParams.gameId) {
            // user has no details or no game ID - cannot join
            $location.path('/mobile/');
            return;
        }
        
        // join game
        GameService.join($routeParams.gameId, $rootScope.user).then(function(response) {
            $scope.connectionId = response.name();

            // get game details
            $scope.game = GameService.get($routeParams.gameId);
            
            $scope.$watch('game.gameStatus', function(value) {
                switch(value) {
                    case 'Waiting':
                        var refreshInterval = setInterval(function() {
                            $scope.$apply(function(){
                                $scope.game.timeLeft--;
                            });

                            if ($scope.game.timeLeft < 1) {
                                $scope.game.gameStatus = 'Playing';
                            }
                        }, 1000);
                    break;
                    case 'Playing':
                        var goToGame = Math.floor((Math.random() * 10) + 1);
                        clearInterval(refreshInterval);
                        $location.path('/game/' + goToGame);
                    break;
                    default:
                        // just wait
                    break;
                };
            });
        });
    }]);