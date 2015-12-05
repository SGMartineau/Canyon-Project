angular.module('canyon').service('newZoneService', function ($http) {

    this.addZone = function (zoneObj) {
        $http.post('/api/zone', zoneObj);
    }

});