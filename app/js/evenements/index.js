'use strict';

var listeEvenementController = require('./controllers/ListeEvenementsController');
var creerEvenementController = require('./controllers/CreerEvenementController');
var detailEvtParticipantController = require('./controllers/DetailEvtParticipantController');
var mesEvenementsController = require('./controllers/MesEvenementsController');

var evenementService = require('./services/EvenementService');

module.exports = angular.module('evenements.controllers', [])
  .controller('ListeEvenementsController', ['$scope', 'EvenementService', listeEvenementController])
  .controller('CreerEvenementController', ['$scope', creerEvenementController])
  .controller('DetailEvtParticipantController', ['$scope', '$modal', '$log', detailEvtParticipantController])
  .controller('MesEvenementsController', ['$scope', '$modal', '$log', mesEvenementsController])

  .service('EvenementService', ['$http', evenementService]);