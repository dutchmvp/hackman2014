angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', function ($scope) {

		$scope.Game = "Test";
		console.log('main controller');
        $scope.gameState = 1;
        
    }])
    .controller('ctrlHome', ['$scope', function ($scope) {
		console.log('added');
    }]);