angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', function ($scope) {
		console.log('main controller');
        
        $scope.gameState = 0;
        
    }])
    .controller('ctrlHome', ['$scope', function ($scope) {
		console.log('added');
    }]);