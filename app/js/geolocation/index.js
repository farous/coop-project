'use strict';

var geocodingService = require('./services/GeocodingService');
var geolocationService = require('./services/GeolocationService');

module.exports = angular.module('evenements.controllers', [])

  .service('GeocodingService', geocodingService)
  .service('GeolocationService', geolocationService);