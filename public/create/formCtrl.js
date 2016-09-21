angular.module('canyon').controller('formCtrl', function ($scope, $location, formSvc) {
    
    $scope.getZones = function () {
        formSvc.getZones().then(function (response) {
            $scope.zones = response;
        })
    }
    
    $scope.getZones();
    
    $scope.newCanyon = {};
    
    $scope.toSecond = function () {
        formSvc.selectedZone = $scope.selectedZone;
        console.log(formSvc.selectedZone);
        formSvc.canyon = $scope.newCanyon;
        $location.url('/form2');
    }
    
    $scope.setTech = function (num) {
        formSvc.canyon.technical = num;
    };
    
    $scope.setWater = function (str) {
        formSvc.canyon.water = str;
    };
    
    $scope.setTime = function (str) {
        formSvc.canyon.time = str;
    };
    
    $scope.setRisk = function (str) {
        formSvc.canyon.risk = str;
    };
    
    $scope.submit = function () {
        
        formSvc.canyon.latitude = Number(formSvc.canyon.latitude);
        formSvc.canyon.longitude = Number(formSvc.canyon.longitude);
        
        formSvc.postCanyon(formSvc.canyon).then(function (response) {
            console.log(response);
            formSvc.updateZone(formSvc.selectedZone, response._id).then(function (response) {
                $location.url('/');
            })
        })
    }
    
})