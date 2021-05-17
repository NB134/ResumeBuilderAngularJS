angular
  .module("ResumeBuilder")
  .controller("step3", function ($scope, $location, UserData,$mdDialog) {
    $scope.User = UserData.data;
    $scope.expShow = false;
    $scope.showAlert = function (ev) {
      $mdDialog.show(
        $mdDialog
          .alert()
          .parent(angular.element(document.querySelector("#popupContainer")))
          .clickOutsideToClose(true)
          .title("Validation Error")
          .textContent(ev)
          .ariaLabel("Alert Dialog Demo")
          .ok("Got it!")
          .targetEvent(ev)
      );
    };
    $scope.submitData = function (flag) {
      if (flag == 0) {
        $location.path("/step2");
      } else {
        if($scope.User.Experience)
      {
        if($scope.User.Experience.eDate-$scope.User.Experience.sDate<0)
        {
          $scope.showAlert("Kindly enter correct Experience Dates");
          return undefined;
        }
      }
      if($scope.User.project)
      {
         if($scope.User.project.eDate-$scope.User.project.sDate<0)
        {
          $scope.showAlert("Kindly enter correct Project Dates");
          return undefined;
        }
        $location.path("/resume");
      }
    }
    };
  });
