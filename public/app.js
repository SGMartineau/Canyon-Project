angular.module('canyon', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider        
        
        .state('home', {
            url: '/',
            templateUrl: './home/homeTmpl.html',
            controller: 'mainCtrl'
        })
    
        .state('zone', {
            url: '/zone/:zone',
            templateUrl: './zone/zoneTmpl.html',
            controller: 'zoneCtrl'
        })
    
        .state('canyon', {
            url: '/canyon/:canyon',
            templateUrl: './canyon/canyonTmpl.html',
            controller: 'canyonCtrl'
        });
    
    $urlRouterProvider.otherwise('/');
    
});