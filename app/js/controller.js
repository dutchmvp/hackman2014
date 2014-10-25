angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', function ($scope) {
		$scope.Game = "Test";
		console.log('main controller');
        $scope.gameState = 0;
    }])

    .controller('ctrlHome', ['$scope', function ($scope) {
		
    }]);