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
   *
   * @returns {HttpPromise}
   */
  evenementService.derniersEvenements = function(nomJeu, typeJeux, codePostal, date){
    return $http.get('/rechercher', {
      params: {nomJeu: nomJeu, idTypeJeux: typeJeux, codePostal: codePostal, date: date},
      cache: true
    });
  };

  /**
   * Récupère la liste des événement que j'organise
   *
   * @param identifiantUtilisateur
   *
   * @returns {HttpPromise}
   */
  evenementService.evenementsOrganisePar = function(identifiantUtilisateur){
    return $http.get('/todo', {
      params: {identifiantUtilisateur: identifiantUtilisateur}
    });
  };

  /**
   *
   * @returns {HttpPromise}
   */
  evenementService.evenementsParticipePar = function(identifiantUtilisateur){
    return $http.get('/todo', {
      params: {identifiantUtilisateur: identifiantUtilisateur}
    });
  };

  return evenementService;

};