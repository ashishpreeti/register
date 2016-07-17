function registerCtrl($scope, $location, dataService, userService) {
    $scope.userName =  userService.getUser();

    function successCallback(response) {
        $scope.countries = response.data;
    }

    function errorCallback(err) {
        $scope.error = JSON.stringify(err.data);
    }

    dataService.getCountryList()
        .then(successCallback, errorCallback);

    $scope.submitForm = function(isValid) {

        var user = {
            name    : $scope.name,
            gender  : $scope.gender,
            age     : $scope.age,
            country : $scope.country
        };

        function userCreated(response) {
            var userName = response.config.data.name;
            $scope.userName = userService.setUser(userName);
            $location.path('/submit');
        }

        function userError(err) {
            $scope.error = JSON.stringify(err.data);
        }

        if (isValid) {
            dataService.registerUser(user)
                .then(userCreated, userError);

        }

    };
}

module.exports =  registerCtrl;
