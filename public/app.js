angular.module('canyon', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider        
        
        .state('home', {
            url: '/',
            templateUrl: './home/homeTmpl.html',
            controller: 'mainCtrl'
        })
    
        .state('zone', {
            url: '/zone/:zoneId',
            templateUrl: './zone/zoneTmpl.html',
            controller: 'zoneCtrl'
        })
    
        .state('canyon', {
            url: '/canyon/:canyon',
            templateUrl: './canyon/canyonTmpl.html',
            controller: 'canyonCtrl'
        })
    
        .state('newZone', {
            url: '/addZone',
            templateUrl: './create/newZoneTmpl.html',
            controller: 'newZoneCtrl'
        })
    
        .state('newCanyon', {
            url: '/addCanyon',
            templateUrl: './create/newCanyonTmpl.html',
//            templateUrl: './create/miles.html',
            controller: 'newCanyonCtrl'
//            controller: 'miles'
        });
    
    $urlRouterProvider.otherwise('/');
    
});