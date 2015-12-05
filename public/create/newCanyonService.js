angular.module('canyon').service('newCanyonService', function ($http) {

    this.addCanyon = function (canyonObj) {
        $http.post('/api/canyon', canyonObj);
    }

});