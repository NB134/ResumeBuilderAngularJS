angular.module("ResumeBuilder").controller("step2", function($scope,$rootScope,$location,$timeout)
{
    $scope.User={};
    $scope.$on("step1",function(event, args)
    {
        console.log("hello");
        $scope.User={...args};
        console.log("updated user",$scope.User);
    });

    $scope.submitData=function(){
        console.log($scope.User);
        $timeout(function(){
            // $scope.$broadcast('someEvent', 'bidule');
            $rootScope.$broadcast("step2", $scope.User);
         },100);
          $location.path( "/step3" );
    }
});