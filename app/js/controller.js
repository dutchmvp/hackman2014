angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', '$rootScope', 'GameService', '$location', function ($scope, $rootScope, GameService, $location) {
        function is_touch_device() {
          return !!('ontouchstart' in window);
        }
        
        if (!is_touch_device()) {
            $scope.gamedevice = 'desktop';
        }
        
        // mobile watching
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
        
        $rootScope.$watch('game.gameStatus', function(value) {
            if ($rootScope.isMobile && $rootScope.connection) { 
                if (value == 'Winner') {
                    $location.path('/mobile/winner/');
                }
            }
        });
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