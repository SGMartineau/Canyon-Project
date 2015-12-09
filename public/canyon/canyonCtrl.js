angular.module('canyon').controller('canyonCtrl', function($scope, $stateParams, $http) {
    $scope.canyonName = $stateParams.canyon;
    
    $scope.getACanyon = function() {
        $http.get('/api/canyon-1?_id=' + $stateParams.canyon).then(function ( response ){
            $scope.canyon = response.data;
        });
    };
      
    $scope.getACanyon();
    
    $scope.editCanyonForm = false;
    $scope.canyonButtonShow = true;
    $scope.commentButtonShow = true;
    $scope.commentBox = false;
    
    
    
    $scope.showCanyonForm = function() {
        $scope.editCanyonForm = true;
        $scope.canyonButtonShow= false;
    }
    
    $scope.editCanyon = function () {
        $http.put('/api/canyon?_id=' + $scope.canyon._id, $scope.canyon);
        $scope.editCanyonForm = false;
        $scope.canyonButtonShow = true;
    }
    
    
});