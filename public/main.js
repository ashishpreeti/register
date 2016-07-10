var angular = require('angular');
angular.module('registerApp', ['registerApp'])
    .controller('registerCtrl', ['$scope', require('./controllers/registerCtrl')]);
