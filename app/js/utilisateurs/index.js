'use strict';

var inscriptionController = require('./../utilisateurs/controllers/InscriptionController');
var compteController = require('./../utilisateurs/controllers/CompteController');

module.exports = angular.module('utilisateurs.controllers', [])
  .controller('InscriptionController', ['$scope', inscriptionController])
  .controller('CompteController', ['$scope', compteController]);