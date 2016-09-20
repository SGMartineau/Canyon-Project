angular.module('canyon', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider        
        
        .state('home', {
            url: '/',
            templateUrl: './home/homeTmpl.html',
            controller: 'homeCtrl'
        })
    
        .state('canyon', {
            url: '/canyon/:canyonId',
            templateUrl: './canyon/canyonTmpl.html',
            controller: 'canyonCtrl',
            resolve: {
                canyonResolve: function (homeSvc) {
                    return homeSvc.passCanyon();
                }
            }
        })
    
        .state('form1', {
            url: '/form1',
            templateUrl: './create/new1Tmpl.html',
            controller: 'formCtrl'
        })
    
        .state('form2', {
            url: '/form2',
            templateUrl: './create/new2Tmpl.html',
            controller: 'formCtrl'
        });
    
    $urlRouterProvider.otherwise('/');
    
});