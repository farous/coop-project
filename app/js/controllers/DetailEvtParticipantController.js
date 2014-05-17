'use strict';

module.exports = function ($scope, $modal, $log) {

  $scope.afficherPopupAnnulerParticipation = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'popupAnnulerParticipation.html',
      controller: ModalInstanceCtrl,
      size: size
    });

    modalInstance.result.then(function () {
      $log.info('Modal closed at: ' + new Date());
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
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

};