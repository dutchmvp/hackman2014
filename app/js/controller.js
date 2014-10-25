angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope','$interval', function ($scope,$interval) {
		$scope.Game = "Test";
		console.log('main controller');
        
        $scope.gameState = 2;
        $scope.gamedevice = 'desktop';
        
        $scope.players = {
            1 : {
                name:'jason staerck',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            2 : {
                name:'Matt philips',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 2
            },
            3 : {
                name:'lee cooper',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            4 : {
                name:'kristy brooks',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            5 : {
                name:'ben ely',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            6 : {
                name:'cock master',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10000
            },
            7 : {
                name:'mickey mouse',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            8 : {
                name:'Mike Chadwick',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            9 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            10 : {
                name:'bonny supper star',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            }
        
        }

      
        $scope.counter = 180;
        $scope.nearEnd = false;
      
        var start = $interval(function() {
            
              
            if($scope.counter !== 0) {
                $scope.counter--
                
                if($scope.counter < 30) {
                    
                    $scope.nearEnd = true;
                    
                }
            }
            
        },180);
        
          
       
        
    }])

    .controller('ctrlHome', ['$scope', function ($scope) {
		
    }])
    .filter('formatTimer', function() {
      return function(input)
        {
            function z(n) {return (n<10? '0' : '') + n;}
            var seconds = input % 60;
            var minutes = Math.floor(input / 60);
            var hours = Math.floor(minutes / 60);
            return (z(minutes)+':'+z(seconds));
        };
    });