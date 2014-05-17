'use strict';

module.exports = function ($scope) {

  $scope.statutConnexion = "deconnecte";

  $scope.connexion = function (email, password) {
    if (email === "toto") {
      $scope.statutConnexion = "connecte";
    }
  };

  $scope.deconnexion = function () {
    $scope.statutConnexion = "deconnecte";
  };
};