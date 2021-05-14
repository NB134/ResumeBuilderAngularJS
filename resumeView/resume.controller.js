angular.module("ResumeBuilder").controller("resume",function($scope,$timeout,$rootScope,$location){
    $scope.User={};
    $scope.dummyUser={
        "name": "Joyce Harrison",
        "number": 7181110011,
        "email": "Joyce@company.com",
        "skills": "HTML, CSS,JavaScript",
        "Degree": "Masters in Information Technology",
        "InstituteName": "International University",
        "InstituteLocation": "City Center, New York, U.S.A",
        "GPA": 2.9,
        "Gdate": "May, 2013",
        "Experience": {
          "designation": "Frontend Developer",
          "Organisation": "Creative Agency",
          "sDate": "May, 2015",
          "eDate": "Jan, 2016"
        },
        "project": {
          "title": "Ink Fighter",
          "description": "Do do quis sit laboris duis. Occaecat Lorem nulla exercitation sint aliquip aliqua ipsum nisi aliquip incididunt laboris nulla in eiusmod. Est velit consectetur labore non commodo eiusmod nulla do pariatur. Minim nostrud ex do cupidatat do ut cupidatat do non. Sit eiusmod id culpa elit ad pariatur exercitation fugiat minim quis. ",
          "sDate": "2021-08-31T18:30:00.000Z",
          "eDate": "2023-01-31T18:30:00.000Z"
        },
        "achievements": {
            "title":"CSS3 Certification",
          "description": "Occaecat do dolore eu consectetur velit officia labore. Laboris dolor exercitation voluptate dolore nulla in excepteur culpa aliquip commodo labore est amet mollit. Enim commodo voluptate quis nisi deserunt nisi aute quis fugiat dolor ea veniam."
        }
      }
    $scope.$on("step3",function(event, args)
    {
        console.log("hello");
        $scope.User={...args};
        console.log("updated user",$scope.User);
    });

    $scope.home=function(){
        console.log($scope.User);
        $timeout(function(){
            // $scope.$broadcast('someEvent', 'bidule');
            $rootScope.$broadcast("ClearData");
         },100);
          $location.path( "/!" );
    }

    
});