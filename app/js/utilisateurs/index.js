'use strict';

var inscriptionController = require('./controllers/InscriptionController');
var compteController = require('./controllers/CompteController');

module.exports = angular.module('utilisateurs.controllers', [])
  .controller('InscriptionController', ['$scope', inscriptionController])
  .controller('CompteController', ['$scope', compteController]);