'use strict';

module.exports = function ($scope, evenementService) {

  function init() {
    evenementService.derniersEvenements(null, null, null, null)
      .success(function(data){
        $scope.evenements = data;
      })
      .error(function(){
        $scope.evenements = [
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '92100 BOULOGNE-BILLANCOURT',
            'participants': '1/2',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          },
          {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
          }
        ];
      });
  }
  init();

  $scope.open = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
};