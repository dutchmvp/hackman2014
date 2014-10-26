angular.module('FSUGame.controllers')

    .controller('ctrlGame1', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
    
    	var difficulty = 500;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
    	
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
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.removeElement('youLose', 10000);
			}
		});
		
		
		$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 1) {
				    notMyGame = true;
			    }
			}
			
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
    }])
    .controller('ctrlGame2', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
   		var difficulty = 500;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
    	
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
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.checkAnswer('youLose', 10000);
			}
		});
    	
    	$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 2) {
				    notMyGame = true;
			    }
			}
			
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
    	
    }])
    .controller('ctrlGame3', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
		var difficulty = 500;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
    	
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
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.checkAnswer('youLose', 10000);
			}
		});
    	
    	$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 3) {
				    notMyGame = true;
			    }
			}
			
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
    }])
    .controller('ctrlGame4', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
		var difficulty = 800;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
    	
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
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.checkAnswer('youLose', 10000);
			}
		});
    	
    	$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 4) {
				    notMyGame = true;
			    }
			}
			
			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
		
    }])
    .controller('ctrlGame5', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
		var difficulty = 800;
    	
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
        
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
					  "img": "mcdonald1"})
					  
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
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.checkAnswer('youLose', 10000);
			}
		});
    	
    	$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 5) {
				    notMyGame = true;
			    }
			}

			clearInterval(pointsTimer);
			$location.path("/game/" + goToGame);
		}
		
		

    }])
    .controller('ctrlGame6', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
    
    	$scope.readyToPlay = false;
    	var difficulty = 1000;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
        
		$scope.Levels = [];
    	
    	$scope.Levels.push({ "level" : 1,
					  		 "pattern" : [2,1,3,0,1,1]});
		$scope.Levels.push({ "level" : 2,
					  		 "pattern" : [1,1,0,2,2,3]});
		$scope.Levels.push({ "level" : 3,
					  		 "pattern" : [3,2,3,0,1,3]});
					  		 
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		var playArray = 0;
		$scope.elements = document.getElementsByClassName('simonElement');
		
		var playGame = setInterval(function() {
			var lightUpElement = $scope.level.pattern[playArray]
			$scope.elements[lightUpElement].style.opacity = 1;
			setTimeout(function () {
				$scope.elements[lightUpElement].style.opacity = 0.5;
			}, difficulty-100)
			playArray++
			if (playArray >= $scope.level.pattern.length) {
				clearInterval(playGame)
				$scope.readyToPlay = true;
			}
		}, difficulty)
		
		$scope.pressArray = 0;
		
		$scope.pressSimon = function (selected) {
		console.log('simon pressed');
			if ($scope.readyToPlay == true) {
				if (selected != $scope.level.pattern[$scope.pressArray]) {
					$scope.moveOn(0);
					console.log('incorrect');
				} else {
					$scope.elements[selected].style.opacity = 1;
					setTimeout(function() {
						$scope.elements[selected].style.opacity = 0.5;
					}, 300)
					console.log('correct');
				}
				
				$scope.pressArray ++;
				
				if ($scope.pressArray >= $scope.level.pattern.length) {
					$scope.moveOn(10);
				}
			}
		}
		
		$scope.moveOn = function (points) {
			console.log('moveon called');
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			clearInterval(playGame);
    		
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 6) {
				    notMyGame = true;
			    }
			}
    		
			$location.path("/game/" + goToGame);
		}
					  		 

    }])
    .controller('ctrlGame7', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
        $scope.dontShow = true;
        var difficulty = 800;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
        
		$scope.Levels = [];
    	
    	$scope.Levels.push({ "level" : 1,
					  		 "img" : "business",
					  		 "correct": 1,
					  		 "question": "What colour tie was the man wearing",
					  		 "answers": ["Yellow", "Blue", "Black", "Green"]});
    	$scope.Levels.push({ "level" : 2,
					  		 "img" : "business",
					  		 "correct": 2,
					  		 "question": "What colour blouse was the women wearing",
					  		 "answers": ["Yellow", "Blue", "White", "Black"]});
		$scope.Levels.push({ "level" : 3,
					  		 "img" : "business",
					  		 "correct": 0,
					  		 "question": "What colour shirt was the man wearing",
					  		 "answers": ["Blue", "Purple", "White", "Black"]});
	    $scope.Levels.push({ "level" : 4,
					  		 "img" : "cardriving",
					  		 "correct": 3,
					  		 "question": "What colour shirt was the driver wearing",
					  		 "answers": ["Blue", "Purple", "White", "Red"]});
	    $scope.Levels.push({ "level" : 5,
					  		 "img" : "cardriving",
					  		 "correct": 3,
					  		 "question": "What colour was the car in front",
					  		 "answers": ["Blue", "Purple", "Black", "White"]});
					  		 
		var levelNumber = Math.floor((Math.random() * $scope.Levels.length));
		$scope.level = $scope.Levels[levelNumber];
		
		var pointsTimer = '';
		
		setTimeout(function() {
			$scope.dontShow = false;
			
			    $scope.points = 10;
		    	
		    	var pointsTimer = setInterval(function() {
		    		$scope.$apply(function(){
		    			
						$scope.points--;
					});
		    	}, 800)

			    	document.getElementById('showMe').style.display = "block";
			    	document.getElementById('showImg').style.display = "none";

		    	
		    	
		}, 3000);
		
		$scope.checkAnswer = function (theindex) {
			if (theindex == $scope.level.correct) {
				$scope.moveOn($scope.points);
			} else {
				console.log('incorrect');
				$scope.moveOn(0);
			}
		}
		
		$scope.$watch('points', function() {
			if ($scope.points < 0) {
				$scope.checkAnswer('youLose', 10000);
			}
		});
    	
    	$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 7) {
				    notMyGame = true;
			    }
			}
			
			clearInterval(pointsTimer);
			document.getElementById('showImg').style.display = "block";
			document.getElementById('showMe').style.display = "none";
			$location.path("/game/" + goToGame);
			
		}
    }])
    .controller('ctrlGame8', ['$scope', '$location', '$rootScope', 'amountOfGames', function ($scope, $location, $rootScope, amountOfGames) {
    
    	$scope.getNumber = Math.floor((Math.random() * 20));
    	$scope.swipedNumber = 0;
    	$scope.swipedRight = function () {
	    	$scope.moneyElements[$scope.swipedNumber].className = $scope.moneyElements[$scope.swipedNumber].className + " animateMoney";
	    	$scope.swipedNumber++;
    	}
    	
    	$scope.moneyElements = document.getElementsByClassName('money');
    	
    	$scope.moneyDone = function () {
	    	if ($scope.swipedNumber == $scope.getNumber) {
		    	$scope.moveOn(10);
	    	} else {
		    	$scope.moveOn(0);
	    	}
    	}
    	
    	$scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 8) {
				    notMyGame = true;
			    }
			}
			
			$location.path("/game/" + goToGame);
			
		}
    	
/*
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 8) {
				    notMyGame = true;
			    }
			}
			
			$location.path("/game/" + goToGame);

*/

		
    }])

    .controller('ctrlGame9', ['$scope', '$location', '$rootScope', 'amountOfGames','$interval', function ($scope, $location, $rootScope, amountOfGames,$interval) {
		
            
        $scope.count = 0;
        $scope.countTo = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        $scope.guess = 0;
        $scope.hideNumber = false;
        $scope.points = 10;
        
        // give chance of multiplier
        $scope.multipler = false;
        
        var multiplierChance = Math.random();
        console.log(multiplierChance);
        if (multiplierChance < 0.25) {
            $scope.multipler = 3;
        }
        else if (multiplierChance < 0.35) {
            $scope.multipler = 2;
        }
        
        $scope.moveOn = function (points) {
			if (typeof $rootScope.connection != "undefined") {
                if ($scope.multipler) {
                    points = points * $scope.multipler;   
                }
                
				$rootScope.connection.client.score += points;
			}
			
			var notMyGame = false;
			
			while (notMyGame == false) {
    			console.log('while loop ran');
			    var goToGame = Math.floor((Math.random() * amountOfGames) + 1);
			    if (goToGame != 9) {
				    notMyGame = true;
			    }
			}
		
			$location.path("/game/" + goToGame);
		}
        
        $scope.guessNumber = function(count) {
  
            var guessed = count;

            
            if(guessed == $scope.countTo) {
                
                
                $interval.cancel(timer);
                $scope.moveOn(10); 
                
            } else if(guessed == ($scope.countTo-1) || ($scope.countTo+1))  {
                
                $interval.cancel(timer);
                $scope.moveOn(5); 
            } else {
                
                $interval.cancel(timer);
                $scope.moveOn(0); 
                
            }
            
        }
 
        var timer = $interval(function() {
           $scope.count++;
            
            if($scope.count >= 5) {
                
                $scope.hideNumber = true;
                
            }
        
            if($scope.count == $scope.countTo){
                console.log('stop')
                $interval.cancel(timer);
            }
            
        },480);
        
    }]);
