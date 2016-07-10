var angular = require('angular');
angular.module('registerApp', ['registerApp'])
    .service('countryService', ['$http', '$q', require('./services/countryService')])
    .controller('registerCtrl', ['$scope', 'countryService', require('./controllers/registerCtrl')]);
