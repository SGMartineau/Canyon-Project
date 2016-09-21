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
    
    $scope.showMe = function () {
        var input = angular.element(document.querySelector('#theZone'));
        var first = angular.element(document.querySelector('#theAdd'));
        var button = angular.element(document.querySelector('#theButton'));
        input.css('display', 'block');
        first.css('display', 'none');
        button.css('display', 'block');
    }
    
    $scope.submitZone = function (zoneName) {
        homeSvc.addZone(zoneName).then(function (response) {
            $scope.zones.push(response);
            var input = angular.element(document.querySelector('#theZone'));
            var first = angular.element(document.querySelector('#theAdd'));
            var button = angular.element(document.querySelector('#theButton'));
            input.css('display', 'none');
            first.css('display', 'block');
            button.css('display', 'none');
        })
    }
    
});