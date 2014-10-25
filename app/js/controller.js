angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', function ($scope) {
		console.log('main controller');
    }])
    .controller('ctrlHome', ['$scope', function ($scope) {
		console.log('added');
    }]);