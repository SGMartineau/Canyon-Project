angular.module('canyon').controller('mainCtrl', function( $scope, $http ) {
    
    $scope.getZone = function() {
        $http.get('/api/zone').then(function( response ) {
            $scope.zones = response.data;
        });
    }
    
    $scope.getZone();
    
    $scope.getCanyon = function() {
        $http.get('/api/canyon').then(function( response ) {
            $scope.canyons = response.data;
        });
    }
    
    $scope.getCanyon();
    
/*    $scope.updateAlias = function() {
        $scope.zone.alias = $scope.zone.name.toLowerCase().split(' ').join('');
    }
    */
    
});