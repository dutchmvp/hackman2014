angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', function ($scope) {
		$scope.Game = "Test";
    }])
    .controller('ctrlHome', ['$scope', function ($scope) {
		console.log('added');
    }]);