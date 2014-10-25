angular
    .module('FSUGame')
    .controller('lbMainController', function() {
        /*
         * States:
         *  - 0: Click to start game
         *  - 1: Waiting room
         *  - 2: Playing
         *  - 3: Game end
         */
        this.state = 0;
    });
