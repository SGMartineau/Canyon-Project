angular.module('canyon').service('formSvc', function ($http) {
    
    this.getZones = function () {
        return $http.get('/api/zone').then(function (response) {
            return response.data;
        })
    }
    
    this.canyon = {};
    
    this.selectedZone = '';
    
    this.postCanyon = function (cany) {
        return $http.post('/api/canyon', cany).then(function (response) {
            console.log(response);
            return response.data;
        })
    }
    
    this.updateZone = function (zone, canyon) {
        return $http.put('/api/zone?_id=' + zone + '&&canyonId=' + canyon).then(function (response) {
            return response.data;
        })
    }
    
})