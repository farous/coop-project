'use strict';

module.exports = function($http){
  var evenementService = {};

  /**
   * Derniers événement par ordre chronologique
   *
   * @param nomJeu
   * @param typeJeux
   * @param codePostal
   * @param date
   */
  evenementService.derniersEvenements = function(nomJeu, typeJeux, codePostal, date){
    return $http.get('/rechercher', {
      params: {nomJeu: nomJeu, idTypeJeux: typeJeux, codePostal: codePostal, date: date},
      cache: true
    });
  };

  return evenementService;

};