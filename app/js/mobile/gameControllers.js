angular.module('FSUGame.controllers')

    .controller('ctrlGame1', ['$scope', '$location', 'amountOfGames', function ($scope, $location, amountOfGames) {
    
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
			var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
    }])
    .controller('ctrlGame2', ['$scope', '$location', 'amountOfGames', function ($scope, $location, amountOfGames) {
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
			var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
    	
    }])
    .controller('ctrlGame3', ['$scope', '$location', 'amountOfGames', function ($scope, $location, amountOfGames) {
		var difficulty = 500;
    	
    	$scope.points = 10;
    	
    	var pointsTimer = setInterval(function() {
    		$scope.$apply(function(){
				$scope.points--;
			});
    	}, difficulty)
    	
    	$scope.Levels = [];
    	
    	$scope.Levels.push( { "level" : 1,
					  "correct" : 0,
					  "img": "apples.png",
					  "buttons" : ['Apples','Pears','Oranges','Bananas']});
		$scope.Levels.push( { "level" : 2,
					  "correct" : 2,
					  "img": "egg.jpg",
					  "buttons" : ['Chickens','Cows','Eggs','Sheep']});
		$scope.Levels.push( { "level" : 3,
					  "correct" : 1,
					  "img": "chicken.jpg",
					  "buttons" : ['Eggs','Chickens','Cows','Sheep']});
		$scope.Levels.push( { "level" : 4,
					  "correct" : 3,
					  "img": "oranges.png",
					  "buttons" : ['Pears','Apples','Bananas','Oranges']});
		$scope.Levels.push( { "level" : 5,
					  "correct" : 0,
					  "img": "pears.png",
					  "buttons" : ['Pears','Apples','Oranges','Bananas']});
		$scope.Levels.push( { "level" : 6,
					  "correct" : 1,
					  "img": "sheep.jpg",
					  "buttons" : ['Cows','Sheep','Eggs','Chickens']});
					  
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		$scope.checkAnswer = function (theindex) {
			console.log(theindex);
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
			var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
    }])
    .controller('ctrlGame4', ['$scope', '$location', 'amountOfGames', function ($scope, $location, amountOfGames) {
		var difficulty = 800;
    	
    	$scope.points = 10;
    	
    	var pointsTimer = setInterval(function() {
    		$scope.$apply(function(){
				$scope.points--;
			});
    	}, difficulty)
    	
    	$scope.Levels = [];
    	
    	$scope.Levels.push( { "level" : 1,
					  "correct" : 0,
					  "img": "beyonce.jpg",
					  "buttons" : ['Beyonce','Kesha','Kelly Rowland','Jen Hudson']});
		$scope.Levels.push( { "level" : 2,
					  "correct" : 1,
					  "img": "gwynth.jpg",
					  "buttons" : ['Cheryl Cole','Gwyneth Paltrow','Lady Gaga','Scarlett Johansson']});
		$scope.Levels.push( { "level" : 3,
					  "correct" :0,
					  "img": "hayden.jpg",
					  "buttons" : ['Hayden Panettiere','Gwyneth Paltrow','Jennifer Aniston','Lady Gaga']});
		$scope.Levels.push( { "level" : 4,
					  "correct" : 3,
					  "img": "jennifer.jpg",
					  "buttons" : ['Hayden Panettiere','Gwyneth Paltrow','Jennifer Lawrence','Kesha']});
		$scope.Levels.push( { "level" : 5,
					  "correct" : 0,
					  "img": "katyperry.jpg",
					  "buttons" : ['Katy Perry','Zooey Deschanel','Emily Blunt','Lady Gaga']});
		$scope.Levels.push( { "level" : 6,
					  "correct" : 1,
					  "img": "mila.jpg",
					  "buttons" : ['Cheryl Cole','Mila Kunis','Scarlett Johansson','Beyonce']});
		$scope.Levels.push( { "level" : 6,
					  "correct" : 2,
					  "img": "scarlett.jpg",
					  "buttons" : ['Cheryl Cole','Mila Kunis','Scarlett Johansson','Beyonce']});
					  
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		$scope.checkAnswer = function (theindex) {
			console.log(theindex);
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
			var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
		
    }])
    .controller('ctrlGame5', ['$scope', '$location', 'amountOfGames', function ($scope, $location, amountOfGames) {
		var difficulty = 800;
    	
    	$scope.points = 10;
    	
    	var pointsTimer = setInterval(function() {
    		$scope.$apply(function(){
				$scope.points--;
			});
    	}, difficulty)
    	
    	$scope.Levels = [];
    	
    	$scope.Levels.push({ "level" : 1,
					  "different" : 0,
					  "img": "discovery"})
		$scope.Levels.push({ "level" : 2,
					  "different" : 1,
					  "img": "ella"})
		$scope.Levels.push({ "level" : 3,
					  "different" : 2,
					  "img": "holly"})
		$scope.Levels.push({ "level" : 4,
					  "different" : 3,
					  "img": "katyperry"})
		$scope.Levels.push({ "level" : 5,
					  "different" : 0,
					  "img": "kellybrook"})
		$scope.Levels.push({ "level" : 6,
					  "different" : 1,
					  "img": "mcdonald"})
					  
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		setTimeout(function() {
			var differentElement = document.getElementsByClassName('differentImages');
			differentElement[$scope.level.different].src="img/" + $scope.level.img + 'different.jpg';
		})

		
		$scope.checkAnswer = function (theindex) {
			console.log(theindex, $scope.level.different);
			if (theindex == $scope.level.different) {
				$scope.moveOn($scope.points);
			} else {
				console.log('incorrect');
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
			var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
		

    }])
    .controller('ctrlGame6', ['$scope', function ($scope) {
    	var difficulty = 500;
		$scope.Levels = [];
    	
    	$scope.Levels.push({ "level" : 1,
					  		 "pattern" : [2,1,3,0,1,1]})
		$scope.Levels.push({ "level" : 2,
					  		 "pattern" : [1,1,0,2,2,3]})
					  		 
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		var playArray = 0;
		
		var playGame = setInterval(function() {
			var lightUpElement = $scope.level.pattern[playArray;]
		}, difficulty)
					  		 

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
