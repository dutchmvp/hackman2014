angular.module('FSUGame.controllers')

    .controller('ctrlGame1', ['$scope', '$location', function ($scope, $location) {
    
    	var difficulty = 500;
    	
    	$scope.points = 10;
    	
    	var pointsTimer = setInterval(function() {
    		$scope.$apply(function(){
				$scope.points--;
			});
    	}, difficulty)
    	
		$scope.Levels = [];
		$scope.Levels.push( { "level" : 1,
							  "amount" : 5,
							  "numbers" : [1,2,3,4]});
		$scope.Levels.push( { "level" : 2,
							  "amount" : 10,
							  "numbers" : [2,3,5,8]});
		$scope.Levels.push( { "level" : 3,
							  "amount" : 13,
							  "numbers" : [4,5,7,10]});
		$scope.Levels.push( { "level" : 4,
							  "amount" : 3,
							  "numbers" : [1,4,2,9]});
		$scope.Levels.push( { "level" : 5,
							  "amount" : 16,
							  "numbers" : [9,7,3,2]});
		$scope.Levels.push( { "level" : 6,
							  "amount" : 12,
							  "numbers" : [1,9,2,6]});
		$scope.Levels.push( { "level" : 7,
							  "amount" : 14,
							  "numbers" : [9,6,5,4]});
		$scope.Levels.push( { "level" : 8,
							  "amount" : 20,
							  "numbers" : [8,7,6,5]});
		$scope.Levels.push( { "level" : 9,
							  "amount" : 4,
							  "numbers" : [1,2,3,5]});
								
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		var amount = 0;
		
		for (var i = 0; i < $scope.level.numbers.length; i++) {
			amount += $scope.level.numbers[i];
		}
		
		$scope.removeElement = function (theThis ,thenumber) {
		
			if (theThis != 'youLose') {
				var elem = angular.element(theThis.srcElement)
				console.log(elem, thenumber);
				elem.css('display', 'none');
			}
			
			amount -= thenumber;
			
			if (amount == $scope.level.amount) {
				$scope.moveOn($scope.points);
				
			} else if (amount < $scope.level.amount) {
				alert ('Incorrect');
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.removeElement('youLose', 10000);
			}
		});
		
		
		$scope.moveOn = function (points) {
			var goToGame = Math.floor((Math.random() * 11) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
    }])
    .controller('ctrlGame2', ['$scope', '$location', function ($scope, $location) {
		var difficulty = 500;
    	
    	$scope.points = 10;
    	
    	var pointsTimer = setInterval(function() {
    		$scope.$apply(function(){
				$scope.points--;
			});
    	}, difficulty)
    	
    	$scope.Levels = [];
    	$scope.Levels.push( { "level" : 1,
							  "correct" : 2,
							  "images" : ['earth','pluto','jupiter','uranus']});
		$scope.Levels.push( { "level" : 2,
							  "correct" : 1,
							  "images" : ['cheetah','elephant','lion','meerkat']});
		$scope.Levels.push( { "level" : 3,
							  "correct" : 0,
							  "images" : ['beetle','earwig','grasshooper','ant']});
		$scope.Levels.push( { "level" : 4,
							  "correct" : 3,
							  "images" : ['fiesta','yaris','smartcar','landrover']});
							  
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		$scope.checkAnswer = function (theindex) {
			if (theindex == $scope.level.correct) {
				$scope.moveOn($scope.points);
			} else {
				alert ('incorrect');
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.checkAnswer('youLose', 10000);
			}
		});
    	
    	$scope.moveOn = function (points) {
    		//Add points to element
			var goToGame = Math.floor((Math.random() * 11) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
    	
    }])
    .controller('ctrlGame3', ['$scope', function ($scope) {
		console.log('Game Three');
    }])
    .controller('ctrlGame4', ['$scope', function ($scope) {
		console.log('Game Four');
    }])
    .controller('ctrlGame5', ['$scope', function ($scope) {
		console.log('Game Five');
    }])
    .controller('ctrlGame6', ['$scope', function ($scope) {
		console.log('Game Six');
    }])
    .controller('ctrlGame7', ['$scope', function ($scope) {
		console.log('Game Seven');
    }])
    .controller('ctrlGame8', ['$scope', function ($scope) {
		console.log('Game Eight');
    }])
    .controller('ctrlGame9', ['$scope', function ($scope) {
		console.log('Game Nine');
    }])
    .controller('ctrlGame10', ['$scope', function ($scope) {
		console.log('Game Ten');
    }]);
