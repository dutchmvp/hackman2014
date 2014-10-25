angular.module('FSUGame.controllers', [])

    .controller('ctrlApp', ['$scope', function ($scope) {

		$scope.Game = "Test";
		console.log('main controller');
        
        $scope.gameState = 2;
        $scope.gamedevice = 'desktop';
        
        $scope.players = {
            1 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            2 : {
                name:'Matt',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 2
            },
            3 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            4 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            5 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            6 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            7 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            8 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            9 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            },
            10 : {
                name:'jason',
                avatar: 'https://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png',
                score: 10
            }
        
        }

        $scope.gameState = 0;
        
    }])
    .controller('ctrlHome', ['$scope', function ($scope) {
		console.log('added');
    }]);