angular.module('FSUGame.controllers')

    .controller('ctrlJoinGame', ['$scope', '$location', function ($scope, $location) {
		$scope.games = new Array();
		$scope.games.push( { "ID" : 1, "name" : "Team FSU", "status" : "Waiting" } );
		$scope.games.push( { "ID" : 2, "name" : "The Girls", "status" : "Playing" } );
		$scope.games.push( { "ID" : 3, "name" : "My Way", "status" : "Playing" } );
		$scope.games.push( { "ID" : 4, "name" : "Gangsters", "status" : "Waiting" } );
		
		$scope.startTheGame = function (name) {
			$scope.$parent.Game = name;
			$location.path("/startGame");
		}
		
		console.log($scope.$parent.Game);
    }])
    .controller('ctrlStartGame', ['$scope', '$location', function ($scope, $location) {
		$scope.game = {};
		$scope.game.timeLeft = 10;
		$scope.game.peoplePlaying = 5;
		$scope.game.gameStatus = "Waiting";
		
		
		$scope.$watch('game.gameStatus', function() {
			if ($scope.game.gameStatus == "Playing") {
				var goToGame = Math.floor((Math.random() * 10) + 1);
				clearInterval(refreshInterval);
				$location.path("/game/" + goToGame);
			}
		});
		   
		var refreshInterval = setInterval(function() {
			$scope.$apply(function(){
				$scope.game.timeLeft--;
			});
			if ($scope.game.timeLeft < 1) {
				$scope.game.gameStatus = "Playing";
			}
			console.log('tick tock' + $scope.game.timeLeft);
		}, 100);
		
		console.log('The GAME IS :' + $scope.$parent.Game);
		
    }]);