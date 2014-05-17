'use strict';

var menuController = require('./MenuController');
var mainController =  require('./MainController');
var listeEvenementController = require('./ListeEvenementsController');
var creerEvenementController = require('./CreerEvenementController');
var inscriptionController = require('./InscriptionController');
var detailEvtParticipantController = require('./DetailEvtParticipantController');
var compteController =  require('./CompteController');
var mesEvenementsController = require('./MesEvenementsController');

module.exports = angular.module('controllers', [])
  .controller('MenuController', ['$scope',menuController])
  .controller('ListeEvenementsController', ['$scope',listeEvenementController])
  .controller('CreerEvenementController', ['$scope', creerEvenementController])
  .controller('InscriptionController', ['$scope', inscriptionController])
  .controller('DetailEvtParticipantController', ['$scope', '$modal', '$log', detailEvtParticipantController])
  .controller('CompteController', ['$scope', compteController])
  .controller('MesEvenementsController', ['$scope', '$modal', '$log', mesEvenementsController])
  .controller('MainController', ['$scope', '$upload',mainController]);