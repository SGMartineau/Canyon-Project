(function () {
    'use strict';

    angular.module('canyon').controller('newCanyonCtrl', CanyonController);

    function CanyonController($scope, $http) {

        $(document).ready(function () {
            $('select').material_select();
        });

        
        
    }
    
    
}());