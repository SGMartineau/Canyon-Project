angular.module('canyon').controller('zoneCtrl', function ($scope, $stateParams, zoneService, $http) {




    $scope.oneCanyon = function () {

        zoneService.getZone($stateParams.zoneId).then(function (response) {
            $scope.oneZone = response;
            zoneService.getWeath(response.latitude, response.longitude).then(function (result) {
                $scope.myWeather = result;
            })

        });
    }

    $scope.oneCanyon();



    $scope.canyonsForZone = function () {
        $http.get('/api/canyon-2?zoneId=' + $stateParams.zoneId).then(function (response) {
            $scope.canyones = response.data;
        });
    };

    $scope.canyonsForZone();

    $scope.editForm = false;
    $scope.buttonShow = true;

    $scope.zoneName = $stateParams.zone;

    $scope.showForm = function () {
        $scope.editForm = true;
        $scope.buttonShow = false;
    }

    $scope.alterZone = function () {
        zoneService.editZone($scope.oneZone);
        $scope.editForm = false;
        $scope.buttonShow = true;
    }


});