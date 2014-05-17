'use strict';

require('./../bower_components/angular/angular');
require('./../bower_components/angular-route/angular-route');
require('./../bower_components/angular-bootstrap/ui-bootstrap');
require('./../bower_components/angular-bootstrap/ui-bootstrap-tpls');
require('./../bower_components/ng-file-upload/angular-file-upload');


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  require('./controllers').name,
  'ui.bootstrap',
  'angularFileUpload'
]).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/listeEvenements', {
            templateUrl: 'partials/listeEvenements.html',
            controller: 'MenuController'
        });
        $routeProvider.when('/mesEvenements', {
            templateUrl: 'partials/mesEvenements.html',
            controller: 'MesEvenementsController'
        });
        $routeProvider.when('/creerEvenement', {
            templateUrl: 'partials/creerEvenement.html',
            controller: 'CreerEvenementController'
        });
        $routeProvider.when('/compte', {
            templateUrl: 'partials/compte.html',
            controller: 'CompteController'
        });
        $routeProvider.when('/inscription', {
            templateUrl: 'partials/inscription.html',
            controller: 'InscriptionController'
        });
        $routeProvider.when('/detailEvtParticipant', {
            templateUrl: 'partials/detailEvtParticipant.html',
            controller: 'DetailEvtParticipantController'
        });
        $routeProvider.otherwise({
            redirectTo: '/listeEvenements'
        });
}]);