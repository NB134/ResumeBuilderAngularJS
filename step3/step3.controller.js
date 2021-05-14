angular
  .module("ResumeBuilder")
  .controller("step3", function ($scope, $rootScope, $timeout, $location) {
    $scope.User = {};
    $scope.$on("step2", function (event, args) {
      console.log("hello");
      $scope.User = { ...args };
      console.log("updated user", $scope.User);
    });



    $scope.submitData = function (flag) {
      console.log($scope.User);
      $timeout(function () {
        // $scope.$broadcast('someEvent', 'bidule');
        $rootScope.$broadcast("step3", $scope.User);
      }, 100);
      if (flag == 0) {
        $location.path("/step2");
      } else {
        
        $location.path("/resume");
      }
    };
  });
