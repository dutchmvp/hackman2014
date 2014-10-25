angular.module('FSUGame.services', [])
    
    .service('GameService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {          
        var gameRef = new Firebase(FIREBASE_URI + 'games'),
            games = $firebase(gameRef).$asArray();
        
        var connectionRef = new Firebase(FIREBASE_URI + 'connections'),
            connection = $firebase(connectionRef).$asArray();

        var service = {
            all: function() {
                return games;
            },
            get: function(id) {
                return games.$getRecord(id);  
            },
            create: function(object) {
                return games.$add(object);
            },
            end: function(id) {
                games.remove(gameObject.$id);
            },
            join: function(id, clientObject) {
                return connection.$add({
                    'gameId': id,
                    'client': clientObject
                });
            }
        };
        
        return service;
    }])

    .service('ClientService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {          
        var ref = new Firebase(FIREBASE_URI + 'clients');
        var clients = $firebase(ref).$asArray();

        var service = {
            create: function(object) {
                return clients.$add(object);
            }
        };
        
        return service;
    }]);