'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('ListeEvenementsController', ['$scope',
    function (scope) {

        scope.evenements = [{
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '92100 BOULOGNE-BILLANCOURT',
            'participants': '1/2',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/no.png',
            'gametitle': 'Street fighter 4',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }];

        scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            scope.opened = true;
        };
  }])


/*********************************************************** creerEvenement ************************************************/

/*********************************************************** creerEvenement ************************************************/

/*********************************************************** creerEvenement ************************************************/

.controller('CreerEvenementController', ['$scope',
    function (scope) {

        scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            scope.opened = true;
        };
}])
/*********************************************************** Mes evenements ************************************************/

/*********************************************************** Mes evenements ************************************************/

/*********************************************************** Mes evenements ************************************************/


.controller('MesEvenementsController', ['$scope',
    function (scope) {
        
         scope.evenementsParticipe = [{
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '92100 BOULOGNE-BILLANCOURT',
            'participants': '1/2',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/participe.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }];

        
         scope.evenementsOrganise = [{
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '92100 BOULOGNE-BILLANCOURT',
            'participants': '1/2',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }, {
            'gamepicture': 'img/organise.png',
            'gametitle': 'Soul calibur',
            'adresse': '94250 GENTILLY',
            'participants': '2/4',
            'date': '11/04/2014',
            'lieu': '75011'
   }];


}])

/*********************************************************** compte ************************************************/

/*********************************************************** compte ************************************************/

/*********************************************************** compte ************************************************/


.controller('CompteController', ['$scope', '$modal', '$log',
    function (scope, modal, log) {

        scope.supprimerCompteModal = function (size) {

            var modalInstance = modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                size: size
            });

            modalInstance.result.then(function () {
                log.info('Modal closed at: ' + new Date());
            }, function () {
                log.info('Modal dismissed at: ' + new Date());
            });
        };


        var ModalInstanceCtrl = function ($scope, $modalInstance) {
            $scope.ok = function () {
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

        };

    }])


/*********************************************************** menu ************************************************/

/*********************************************************** menu ************************************************/

/*********************************************************** menu ************************************************/

.controller('MenuController', ['$scope', 
    function (scope) {
        scope.statutConnexion = "deconnecte";
        scope.connexion = function (email, password) {
            if (email === "toto") {
                scope.statutConnexion = "connecte";
            }
        };
                               
        scope.deconnexion = function () {
            scope.statutConnexion = "deconnecte";
        };
}])

/*********************************************************** inscription ************************************************/

/*********************************************************** inscription ************************************************/

/*********************************************************** inscription ************************************************/

.controller('InscriptionController', ['$scope',
    function (scope) {
       
}])

/*********************************************************** detail evt participant ************************************************/

/*********************************************************** detail evt participant ************************************************/

/*********************************************************** detail evt participant ************************************************/

.controller('DetailEvtParticipantController', ['$scope', '$modal', '$log',
    function (scope, modal, log) {

        scope.afficherPopupAnnulerParticipation = function (size) {

            var modalInstance = modal.open({
                templateUrl: 'popupAnnulerParticipation.html',
                controller: ModalInstanceCtrl,
                size: size
            });

            modalInstance.result.then(function () {
                log.info('Modal closed at: ' + new Date());
            }, function () {
                log.info('Modal dismissed at: ' + new Date());
            });
        };


        var ModalInstanceCtrl = function ($scope, $modalInstance) {
            $scope.annulerParticipation = function () {
                $modalInstance.close();
            };

            $scope.retourParticipation = function () {
                $modalInstance.dismiss('cancel');
            };

        };

    }])