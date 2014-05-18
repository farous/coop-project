'use strict';
module.exports = function ($scope, evenementService) {

  function init(){
    evenementService.evenementsOrganisePar(null)
      .success(function(data){
        $scope.evenementsOrganise = data;
      })
      .error(function(){
        $scope.evenementsOrganise = [
          {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '92100 BOULOGNE-BILLANCOURT',
            'participants': '1/2',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          }
        ];
      });

    evenementService.evenementsParticipePar(null)
      .success(function(data){
        $scope.evenementsParticipe = data;
      })
      .error(function(){
        $scope.evenementsParticipe = [
          {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '92100 BOULOGNE-BILLANCOURT',
            'participants': '1/2',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          }
        ];
      });
  }

  init();


};