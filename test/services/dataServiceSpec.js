describe('Service: registerApp.dataService', function () {

    // load the service's module
    beforeEach(module('registerApp'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (_dataService_) {
        service = _dataService_;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
