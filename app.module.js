let app = angular.module("ResumeBuilder", ["ngMaterial", "ngRoute"]);

app.controller(
  "main",
  function ($scope, $location, UserData) {
    $scope.tab2 = true;
    $scope.tab3 = true;
    $scope.active="home";
    $scope.clicked = 1;
    $scope.stepDisplay = true;
    $scope.progress=0;

    $scope.Proceed = function () {
      UserData.reset();
      $scope.tab2 = true;
    $scope.tab3 = true;
    $scope.active='home';
    $scope.clicked = 1;
    $scope.stepDisplay = true;
    $scope.progress=0;
      $location.path("/step1");
    };
    $scope.checkSteps = function () {
      let loc = $location.path();
      if (loc == "/step1" || loc == "/step2" || loc == "/step3") {
        $scope.stepDisplay = true;
        if (loc == "/step1") {
          $scope.clicked = 1;
          $scope.progress=0;
        } else if (loc == "/step2") {
          $scope.clicked = 2;
          $scope.tab2=false;
          $scope.progress=50;
        } else {
          $scope.clicked = 3;
          $scope.tab3=false;
          $scope.progress=100;
        }
      } else {
        $scope.stepDisplay = false;
        if(loc=="/")
        {
          $scope.active='home';
        }
        else if(loc=="/about")
        {
          $scope.active='about'
        }
        else if(loc=="/contact")
        {
          $scope.active='contact'
        }
      }
    };
    $scope.navTab = function (step) {
      $scope.clicked = step;
      if (step == 1) {
        if ($location.path != "/step1") {
          $location.path("/step1");
        }
      } else if (step == 2) {
        if ($location.path != "step2") {
          $location.path("step2");
        }
      } else {
        if ($location.path != "step3") {
          $location.path("step3");
        }
      }
    };
  }
);

app.factory("UserData", function () {
  let self = this;
  self.data = {
    UserData: {},
  };
  self.reset = function () {
    this.data = {
      UserData: {},
    };
  };
  return {
    reset: self.reset,
    data: self.data,
  };
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "startview.template.html",
    })
    .when("/step1", {
      templateUrl: "./step1/step1.template.html",
      controller: "step1",
    })
    .when("/step2", {
      templateUrl: "./step2/step2.template.html",
      controller: "step2",
    })
    .when("/step3", {
      templateUrl: "./step3/step3.template.html",
      controller: "step3",
    })
    .when("/resume", {
      templateUrl: "./resumeView/resume.template.html",
      controller: "resume",
    })
    .when("/about",{
      templateUrl:"about.template.html",
    })
    .when("/contact",{
      templateUrl:"contact.template.html"
    })
});
