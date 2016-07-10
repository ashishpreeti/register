function countryService($http, $q) {

    var getCountryList = function () {

        var def = $q.defer();

        function successCallback(response) {
            def.resolve(response);
        }

        function errorCallback(err) {
            console.error("Unable to get the country list "+ JSON.stringify(err));
            def.reject(err);
        }

        $http.get('https://restcountries.eu/rest/v1/region/Europe')
            .then(successCallback, errorCallback);


        return def.promise;
    };
    return {
        getCountryList : getCountryList
    }

}

module.exports = countryService;
