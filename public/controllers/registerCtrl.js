function registerCtrl($scope, dataService) {
    function successCallback(response) {
        $scope.countries = response.data;
    }

    function errorCallback(err) {
        $scope.error = JSON.stringify(err.data);
    }

    dataService.getCountryList()
        .then(successCallback, errorCallback);

    $scope.submitForm = function(isValid) {

        data = {
            name    : $scope.name,
            gender  : $scope.gender,
            age     : $scope.age,
            country : $scope.country
        };

        function userCreated(response) {
            $scope.userName = response.data;
        }

        function userError(err) {
            $scope.error = JSON.stringify(err.data);
        }

        if (isValid) {
            console.log("Submitting data ...");
            dataService.registerUser(data)
                .then(userCreated, userError);

        }

    };
}

module.exports =  registerCtrl;
