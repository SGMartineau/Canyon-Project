angular.module('canyon').service('zoneService', function ($http) {
    
    this.editZone = function (zoneObj) {
        $http.put('/api/zone?_id=' + zoneObj._id, zoneObj);
    }
    
});