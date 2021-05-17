angular
  .module("ResumeBuilder")
  .controller("step1", function ($scope, $location, $mdDialog, UserData) {
    $scope.User = UserData.data;
    $scope.submitData = function () {
      if ($scope.userForm.$valid) {
        $location.path("/step2");
      } else {
        $scope.showAlert();
        return undefined;
      }
    };
    $scope.showAlert = function (ev) {
      $mdDialog.show(
        $mdDialog
          .alert()
          .parent(angular.element(document.querySelector("#popupContainer")))
          .clickOutsideToClose(true)
          .title("Validation Error")
          .textContent("Please fill in the details before submitting.")
          .ariaLabel("Alert Dialog Demo")
          .ok("Got it!")
          .targetEvent(ev)
      );
    };
  });
