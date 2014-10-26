angular.module('FSUGame.services', [])
    
    .service('GameService', ['$firebase', 'FIREBASE_URI', '$q', function($firebase, FIREBASE_URI, $q) {          
        var gameRef = new Firebase(FIREBASE_URI + 'games'),
            games = $firebase(gameRef).$asArray();
        
        var connectionRef = new Firebase(FIREBASE_URI + 'connections'),
            connection = $firebase(connectionRef).$asArray();
        
        var service = {
            all: function() {
                return games.$loaded();
            },
            get: function(id) {
                var deferral = $q.defer();
                
                games.$loaded().then(function() {
                    deferral.resolve(games.$getRecord(id));
                });
                
                return deferral.promise;
            },
            create: function(object) {
                var deferral = $q.defer();
                
                games.$add(object).then(function(response) {
                    games.$loaded().then(function() {
                        deferral.resolve(games.$getRecord(response.name()));
                    });
                });
                
                return deferral.promise;      
            },
            update: function(id, object) {
                var deferral = $q.defer();
                
                games.$loaded().then(function() {
                    service.get(id).then(function(response) {
                        deferral.resolve(games.$save(response));
                    });
                });
                
                return deferral.promise;
            },
            end: function(id) {
                games.remove(gameObject.$id);
            },
            join: function(id, clientObject) {
                var deferral = $q.defer(),
                    connectionObject = {
                        'gameId': id,
                        'client': clientObject
                    };
                
                connection.$add(connectionObject).then(function(response) {
                    connection.$loaded().then(function() {
                        connectionObject = connection.$getRecord(response.name());
                                                
                        deferral.resolve(connectionObject);
                    });
                });
                
                return deferral.promise; 
            },
            getConnection: function(id) {
                var deferral = $q.defer();
                
                connection.$loaded().then(function() {
                    deferral.resolve(connection.$getRecord(id));
                });
                
                return deferral.promise;
            },
            leaveConnection: function(id) {
                var deferral = $q.defer();
                
                connection.$loaded().then(function() {   
                    service.getConnection(id).then(function(response) {                        
                        deferral.resolve(connection.$remove(response));
                    });
                });
                
                return deferral.promise;  
            },
            updateScore: function(id, object) {
                var deferral = $q.defer();
                
                connection.$loaded().then(function() {   
                    service.getConnection(id).then(function(response) {                             
                        deferral.resolve(connection.$save(response));
                    });
                });
                
                return deferral.promise;
            },
            onJoin: function(id, callback) {
                connectionRef.on('child_added', function (snapshot) {
                    var player = snapshot.val();
                    
                    if (player.gameId == id && typeof callback == 'function') {
                        callback(snapshot.val());
                    }
                });
            },
            onScoreUpdate: function(id, callback) {
                connectionRef.on('child_changed', function (snapshot) {
                    var player = snapshot.val();
                    
                    if (player.gameId == id && typeof callback == 'function') {
                        callback(snapshot.val());
                    }
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