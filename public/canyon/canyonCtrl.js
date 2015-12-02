angular.module('canyon').controller('canyonCtrl', function($scope, $stateParams, $http) {
    $scope.canyonName = $stateParams.canyon;
    console.log($stateParams.canyon);
    
    $scope.getACanyon = function() {
        $http.get('/api/canyon?' + $stateParams.canyon).then(function ( response ){
            $scope.canyon = response.data[0];
        });
    }
        
    $scope.getACanyon();
    
    
    
});