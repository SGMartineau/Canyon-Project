angular.module('canyon').controller('newCanyonCtrl', function ($scope, $http, newCanyonService) {

    $(document).ready(function () {
        $('select').material_select();
    });


    $scope.addCanyon = function () {
        newCanyonService.addCanyon($scope.canyonData);
        $scope.canyonData = {};
    }


});
