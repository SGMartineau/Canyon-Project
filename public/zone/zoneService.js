angular.module('canyon').service('zoneService', function ($http, $q) {
    
    this.getZone = function (zoneId) {
        var deferred = $q.defer();
        $http.get('/api/zone-1?_id=' + zoneId).then(function (response) {
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }
    
    
    this.editZone = function (zoneObj) {
        $http.put('/api/zone?_id=' + zoneObj._id, {zone: zoneObj});
    }
    
    this.getWeath = function(latitude, longitude) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/c75c8377947743a3/forecast/q/' + latitude + ',' + longitude + '.json'
        }).then(function (response) {
            var weatherTime = response.data.forecast.simpleforecast.forecastday;
            deferred.resolve(weatherTime);
        });
        return deferred.promise;
    }
    
});