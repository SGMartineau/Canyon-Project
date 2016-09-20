angular.module('canyon').controller('homeCtrl', function( $scope, $http, homeSvc, $location ) {

    $scope.getZones = function () {
        homeSvc.getZones().then(function (response) {
            $scope.zones = response;
        })
    }
    
    $scope.getZones();
    
    $scope.showCanyons = function (canArr) {
        $scope.canyons = canArr;
    }
    
    $scope.toCanyon = function (can) {
        homeSvc.thisCanyon = can;
        $location.url('/canyon/' + can._id);
    }
    
    
});