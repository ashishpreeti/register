angular.module('registerApp', ['ui.router','registerApp'])
    .service('dataService', ['$http', '$q', require('./services/dataService')])
    .service('userService', [require('./services/userService')])
    .controller('registerCtrl', ['$scope', '$location', 'dataService', 'userService', require('./controllers/registerCtrl')])
    .config(['$logProvider','$stateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $urlRouterProvider) {
        // Categories state routing
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl: 'views/home.html',
                controller : 'registerCtrl',
                onEnter: function ($log) {
                    $log.debug('Entering the home state.');
                },
                onExit: function ($log) {
                    $log.debug('Exiting the home state.');
                }
            })
            .state('register',{
                url : '/register',
                template : '<h1>Application Submitted</h1>',
                onEnter: function ($log) {
                    $log.debug('Entering the registered state.');
                },
                onExit: function ($log) {
                    $log.debug('Exiting the registered state.');
                }
            })
            .state('submit',{
                url : '/submit',
                templateUrl: 'views/confirmation.html',
                controller : 'registerCtrl',
                onEnter: function ($log) {
                    $log.debug('Entering the confirmation state.');
                },
                onExit: function ($log) {
                    $log.debug('Exiting the confirmation state.');
                }
            })

    }]);
