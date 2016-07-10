function registerCtrl($scope, countryService) {
    function successCallback(response) {
        $scope.countries = response.data;
    }

    function errorCallback(err) {
        $scope.error = JSON.stringify(err.data);
    }

    countryService.getCountryList()
        .then(successCallback, errorCallback);

    $scope.submitForm = function(isValid) {

        if (isValid) {
            alert('our form is amazing');
        }

    };
}

module.exports =  registerCtrl;
