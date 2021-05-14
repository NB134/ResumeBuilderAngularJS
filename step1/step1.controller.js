angular.module("ResumeBuilder").controller("step1",function($scope,$rootScope,$location,$timeout){
    $scope.submitData=function(){
        console.log($scope.User);
        $timeout(function(){
            $rootScope.$broadcast("step1", $scope.User);
         },100);
          $location.path( "/step2" );
    }
});