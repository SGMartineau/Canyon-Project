angular.module('canyon').service('homeSvc', function ($http, $q) {
    
    this.getZones = function () {
        var deferred = $q.defer();
        $http.get('/api/zone').then(function (response) {
            deferred.resolve(response.data);
        })
        return deferred.promise;
    }
    
    this.thisCanyon = null;
    
    this.passCanyon = function () {
        return this.thisCanyon;
    }
    
    this.addZone = function (zoneName) {
        return $http.post('/api/zone', {name: zoneName}).then(function(response) {
            return response.data;
        })
    }
    
})