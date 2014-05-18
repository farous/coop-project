'use strict';

var mainController = require('./controllers/MainController');
var menuController = require('./controllers/MenuController');


module.exports = angular.module('application.controllers', [])
  .controller('MainController', ['$scope', '$upload', mainController])
  .controller('MenuController', ['$scope', menuController]);