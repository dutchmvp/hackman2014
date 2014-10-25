angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope','$rootScope', function ($scope,$rootScope) {
		$scope.Game = "Test";
		
        
        $scope.gameState = 2;
        $scope.gamedevice = 'desktop';
       
        $scope.players = [
            {
                name:'jason staerck',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 9999
            },
            {
                name:'Matt philips',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 2
            },
            {
                name:'lee cooper',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            {
                name:'kristy brooks',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            {
                name:'ben ely',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 16
            },
            {
                name:'cock master',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10000
            },
            {
                name:'mickey mouse',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 120
            },
            {
                name:'Mike Chadwick',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 5
            },
           {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 90
            },
            {
                name:'bonny supper star',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 11
            }
        
        ]
        
        // bottom sheet  controller //
        
        
        
        
        
        // ************************ //

      

        
       

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

    })

    });

