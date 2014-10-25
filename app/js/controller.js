angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope','$rootScope', function ($scope,$rootScope) {
        
        
        function is_touch_device() {
          return !!('ontouchstart' in window);
        }
        
            
        if(!is_touch_device()){
            $scope.gamedevice = 'desktop';
        }

    }])

    .controller('ctrlHome', ['$scope', function ($scope) {
		
    }])
    
    .filter('formatTimer', function() {
        return function(input) {
            function z(n) {return (n < 10? '0' : '') + n;}
            var seconds = input % 60;
            var minutes = Math.floor(input / 60);
            var hours = Math.floor(minutes / 60);
            return (z(minutes) + ':' + z(seconds));
        };
    }); 