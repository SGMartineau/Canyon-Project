angular.module('canyon').controller('canyonCtrl', function($scope, $stateParams, $http) {
    $scope.canyonName = $stateParams.canyon;
    
    $scope.getACanyon = function() {
        $http.get('/api/canyon-1?_id=' + $stateParams.canyon).then(function ( response ){
            $scope.canyon = response.data;
        });
    };
    
    $scope.getACanyon();
    
    $scope.findUser = function() {
        $http.get('/api/autheduser').then(function (response) {
            $scope.authedUser = response.data;
        });
    };
      
    $scope.findUser();
    
    
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
    
    $scope.showCommentForm = function() {
        $scope.commentBox = true;
        $scope.commentButtonShow = false;
    }
    
    $scope.addComment = function () {
        $scope.commentBox = false;
        $scope.commentButtonShow = true;
        $scope.comm.userName = $scope.authedUser.name;
        console.log($scope.authedUser);
        $http.post('/api/comment?_id=' + $stateParams.canyon, $scope.comm).then(function (data) {
            console.log(data);
        })
    }
    
});