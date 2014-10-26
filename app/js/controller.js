angular.module('FSUGame.controllers', [])

<<<<<<< HEAD
    .controller('ctrlApp', ['$scope', '$rootScope', 'GameService', function ($scope, $rootScope, GameService) {
        $rootScope.isMobile = false;
        
        $rootScope.$watch('connection', function() {
            // only mobile has a connection
            $rootScope.isMobile = true;
        });
        
        $rootScope.$watch('connection.client.score', function(value) {
            if ($rootScope.isMobile && $rootScope.connection) { 
                // update users score
                GameService.updateScore($rootScope.connection.$id, $rootScope.connection).then(function(response) {
                    // score updated!  
                });
            }
        });
=======
    .controller('ctrlApp', ['$scope','$rootScope', function ($scope,$rootScope) {
        
        
        function is_touch_device() {
          return !!('ontouchstart' in window);
        }
        
            
        if(!is_touch_device()){
            $scope.gamedevice = 'desktop';
        }

>>>>>>> FETCH_HEAD
    }])

    .controller('ctrlHome', ['$scope', function ($scope) {
		
    }])
    
    .filter('formatTimer', function() {
        return function(input) {
            function z(n) {return (n < 10 ? '0' : '') + n;}
            var seconds = input % 60;
            var minutes = Math.floor(input / 60);
            var hours = Math.floor(minutes / 60);
            return (z(minutes) + ':' + z(seconds));
        };
    }); 