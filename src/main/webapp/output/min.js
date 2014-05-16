"use strict";angular.module("myApp",["ngRoute","myApp.filters","myApp.services","myApp.directives","myApp.controllers","ui.bootstrap","angularFileUpload"]).config(["$routeProvider",function($routeProvider){$routeProvider.when("/listeEvenements",{templateUrl:"partials/listeEvenements.html",controller:"MenuController"}),$routeProvider.when("/mesEvenements",{templateUrl:"partials/mesEvenements.html",controller:"MesEvenementsController"}),$routeProvider.when("/creerEvenement",{templateUrl:"partials/creerEvenement.html",controller:"CreerEvenementController"}),$routeProvider.when("/compte",{templateUrl:"partials/compte.html",controller:"CompteController"}),$routeProvider.when("/inscription",{templateUrl:"partials/inscription.html",controller:"InscriptionController"}),$routeProvider.when("/detailEvtParticipant",{templateUrl:"partials/detailEvtParticipant.html",controller:"DetailEvtParticipantController"}),$routeProvider.otherwise({redirectTo:"/listeEvenements"})}]).controller("MainController",["$scope","$upload",function(scope,upload){scope.typesDeJeu=["FPS","Combat","Sport","Strategie"],scope.supports=["Playstation","Xbox","Gamecube","PC"],scope.listeMois=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],scope.sexes=["Un homme","Une femme"],scope.today=function(){scope.dt=new Date},scope.today(),scope.clear=function(){scope.dt=null},scope.disabled=function(date,mode){return"day"===mode&&(0===date.getDay()||6===date.getDay())},scope.toggleMin=function(){scope.minDate=scope.minDate?null:new Date},scope.toggleMin(),scope.dateOptions={formatYear:"yy",startingDay:1},scope.initDate=new Date("2016-15-20"),scope.onFileSelect=function($files){for(var i=0;i<$files.length;i++){var file=$files[i];scope.upload=upload.upload({url:"server/upload/url",data:{myObj:scope.myModelObj},file:file}).progress(function(evt){console.log("percent: "+parseInt(100*evt.loaded/evt.total))}).success(function(data){console.log(data)})}}}]),angular.module("myApp.controllers",[]).controller("ListeEvenementsController",["$scope",function(scope){scope.evenements=[{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"92100 BOULOGNE-BILLANCOURT",participants:"1/2",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/no.png",gametitle:"Street fighter 4",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"}],scope.open=function($event){$event.preventDefault(),$event.stopPropagation(),scope.opened=!0}}]).controller("CreerEvenementController",["$scope",function(scope){scope.open=function($event){$event.preventDefault(),$event.stopPropagation(),scope.opened=!0}}]).controller("MesEvenementsController",["$scope",function(scope){scope.evenementsParticipe=[{gamepicture:"img/participe.png",gametitle:"Soul calibur",adresse:"92100 BOULOGNE-BILLANCOURT",participants:"1/2",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/participe.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/participe.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/participe.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/participe.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"}],scope.evenementsOrganise=[{gamepicture:"img/organise.png",gametitle:"Soul calibur",adresse:"92100 BOULOGNE-BILLANCOURT",participants:"1/2",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/organise.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/organise.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/organise.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"},{gamepicture:"img/organise.png",gametitle:"Soul calibur",adresse:"94250 GENTILLY",participants:"2/4",date:"11/04/2014",lieu:"75011"}]}]).controller("CompteController",["$scope","$modal","$log",function(scope,modal,log){scope.supprimerCompteModal=function(size){var modalInstance=modal.open({templateUrl:"myModalContent.html",controller:ModalInstanceCtrl,size:size});modalInstance.result.then(function(){log.info("Modal closed at: "+new Date)},function(){log.info("Modal dismissed at: "+new Date)})};var ModalInstanceCtrl=function($scope,$modalInstance){$scope.ok=function(){$modalInstance.close()},$scope.cancel=function(){$modalInstance.dismiss("cancel")}}}]).controller("MenuController",["$scope",function(scope){scope.statutConnexion="deconnecte",scope.connexion=function(email){"toto"===email&&(scope.statutConnexion="connecte")},scope.deconnexion=function(){scope.statutConnexion="deconnecte"}}]).controller("InscriptionController",["$scope",function(){}]).controller("DetailEvtParticipantController",["$scope","$modal","$log",function(scope,modal,log){scope.afficherPopupAnnulerParticipation=function(size){var modalInstance=modal.open({templateUrl:"popupAnnulerParticipation.html",controller:ModalInstanceCtrl,size:size});modalInstance.result.then(function(){log.info("Modal closed at: "+new Date)},function(){log.info("Modal dismissed at: "+new Date)})};var ModalInstanceCtrl=function($scope,$modalInstance){$scope.annulerParticipation=function(){$modalInstance.close()},$scope.retourParticipation=function(){$modalInstance.dismiss("cancel")}}}]),angular.module("myApp.directives",[]).directive("appVersion",["version",function(version){return function(scope,elm){elm.text(version)}}]),angular.module("myApp.filters",[]).filter("interpolate",["version",function(version){return function(text){return String(text).replace(/\%VERSION\%/gm,version)}}]),angular.module("myApp.services",[]).value("version","0.1");