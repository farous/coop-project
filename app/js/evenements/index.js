'use strict';

var listeEvenementController = require('./../evenements/controllers/ListeEvenementsController');
var creerEvenementController = require('./../evenements/controllers/CreerEvenementController');
var detailEvtParticipantController = require('./../evenements/controllers/DetailEvtParticipantController');
var mesEvenementsController = require('./../evenements/controllers/MesEvenementsController');

module.exports = angular.module('evenements.controllers', [])
  .controller('ListeEvenementsController', ['$scope', listeEvenementController])
  .controller('CreerEvenementController', ['$scope', creerEvenementController])
  .controller('DetailEvtParticipantController', ['$scope', '$modal', '$log', detailEvtParticipantController])
  .controller('MesEvenementsController', ['$scope', '$modal', '$log', mesEvenementsController]);