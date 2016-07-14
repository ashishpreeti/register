var angular = require('angular');
 require('angular-ui-router');
angular.module('registerApp', ['ui.router','registerApp'])
    .service('countryService', ['$http', '$q', require('./services/countryService')])
    .controller('registerCtrl', ['$scope', 'countryService', require('./controllers/registerCtrl')])
    .config(['$stateProvider',
        function($stateProvider) {
            // Categories state routing
            $stateProvider.
            state('categories', {
                url: '/categories',
                templateUrl: 'modules/categories/views/categories.client.view.html'
            }).
            state('createCategory', {
                url: '/categories/create',
                templateUrl: 'modules/categories/views/create-category.client.view.html'
            });
        }]);
