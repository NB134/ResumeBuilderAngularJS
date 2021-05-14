angular.module("ResumeBuilder").controller("step1",function($scope,$rootScope,$location,$timeout,$mdDialog){
    $scope.submitData=function(){
        if($scope.userForm.$valid)
        {
        console.log($scope.User);
        $timeout(function(){
            $rootScope.$broadcast("step1", $scope.User);
         },100);
          $location.path( "/step2" );
        }
        else
        {
            $scope.showAlert();
            return undefined;
        }
    }
    $scope.showAlert = function (ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Validation Error')
            .textContent('Please fill in the details before submitting.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
        );
      };
    $scope.$on("step2",function(event, args)
    {
        console.log("hello");
        $scope.User={...args};
        console.log("updated user",$scope.User);
    });
});