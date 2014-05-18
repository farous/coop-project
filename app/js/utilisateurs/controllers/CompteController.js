'use strict';

module.exports = function ($scope, $modal, $log) {

  $scope.supprimerCompteModal = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
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
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  };

};