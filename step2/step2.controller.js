angular.module("ResumeBuilder").controller("step2", function($scope,$rootScope,$location,$timeout,$mdDialog)
{
    $scope.User={};
    $scope.$on("step1",function(event, args)
    {
        console.log("hello");
        $scope.User={...args};
        console.log("updated user",$scope.User);
    });

    $scope.$on("step3",function(event, args)
    {
        console.log("hello");
        $scope.User={...args};
        console.log("updated user",$scope.User);
    });
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
    $scope.submitData=function(flag){
        console.log($scope.User);
        $timeout(function(){
            // $scope.$broadcast('someEvent', 'bidule');
            $rootScope.$broadcast("step2", $scope.User);
         },1000);
         if(flag==0)
         {
            $location.path( "/" );    
         }
         else
         {
             if(!$scope.userForm.$valid)
             {
                $scope.showAlert();
                 return undefined;
             }
            $location.path( "/step3" );
         }
         
         
    }
});