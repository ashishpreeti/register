function dataService($http, $q) {

    var getCountryList = function () {

        var def = $q.defer(),
            URL = 'https://restcountries.eu/rest/v1/region/Europe';

        function successCallback(response) {
            def.resolve(response);
        }

        function errorCallback(err) {
            console.error("Unable to get the country list "+ JSON.stringify(err));
            def.reject(err);
        }

        $http.get(URL)
            .then(successCallback, errorCallback);


        return def.promise;
    };

    var registerUser = function (data) {

        var def = $q.defer(),
            URL = '/api/user';

        function successCallback(response) {
            def.resolve(response);
        }

        function errorCallback(err) {
            console.error("Unable to register user "+ JSON.stringify(err));
            def.reject(err);
        }

        $http.post(URL, data)
            .then(successCallback, errorCallback);


        return def.promise;
    };

    return {
        getCountryList : getCountryList,
        registerUser : registerUser
    }

}

module.exports = dataService;
