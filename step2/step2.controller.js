angular
  .module("ResumeBuilder")
  .controller("step2", function ($scope, $location, $mdDialog, UserData) {
    $scope.User = UserData.data;
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
    $scope.submitData = function (flag) {
      if (flag == 0) {
        $location.path("/step1");
      } else {
        if (!$scope.userForm.$valid) {
          $scope.showAlert();
          return undefined;
        }
        $location.path("/step3");
      }
    };
  });
