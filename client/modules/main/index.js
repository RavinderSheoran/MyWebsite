angular.module('appMain',['appMainCtrl'])
.config(function($stateProvider) {
    $stateProvider
    
    .state('app.home', {
    url: "/home",
    controller: 'MainController',
    templateUrl: "modules/main/template/main.html"
    })
    });
    