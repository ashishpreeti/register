angular.module('registerApp', ['ui.router','registerApp'])
    .service('countryService', ['$http', '$q', require('./services/countryService')])
    .controller('registerCtrl', ['$scope', 'countryService', require('./controllers/registerCtrl')])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // Categories state routing
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url : '/',
            templateUrl: 'views/home.html'
        });

    }]);
