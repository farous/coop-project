'use strict';

require('./../bower_components/angular/angular');
require('./../bower_components/angular-route/angular-route');
require('./../bower_components/angular-ui-router/release/angular-ui-router');
require('./../bower_components/angular-bootstrap/ui-bootstrap');
require('./../bower_components/angular-bootstrap/ui-bootstrap-tpls');
require('./../bower_components/ng-file-upload/angular-file-upload');


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  require('./application').name,
  require('./evenements').name,
  require('./utilisateurs').name,
  'ui.bootstrap',
  'angularFileUpload'
]).
  config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/listeEvenement');

      $stateProvider
        .state('listeEvenement', {
          url: '/listeEvenement',
          templateUrl: 'partials/listeEvenements.html',
          controller: 'ListeEvenementsController'
        })

        .state('compte', {
          url: '/compte',
          templateUrl: 'partials/compte.html',
          controller: 'CompteController'
        })
        .state('mesEvenements', {
          url: '/mesEvenements',
          templateUrl: 'partials/mesEvenements.html',
          controller: 'MesEvenementsController'
        })
        .state('creerEvenement', {
          url: '/creerEvenement',
          templateUrl: 'partials/creerEvenement.html',
          controller: 'CreerEvenementController'
        })
        .state('inscription', {
          url: '/inscription',
          templateUrl: 'partials/inscription.html',
          controller: 'InscriptionController'
        })
        .state('detailEvenementParticipant', {
          url: 'detailEvenementParticipant',
          templateUrl: 'partials/detailEvtParticipant.html',
          controller: 'DetailEvtParticipantController'
        });
    }]);