let app=angular.module("ResumeBuilder",['ngMaterial','ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"./step1/step1.template.html",
        controller : "step1"
    })
    .when("/step2",{
        templateUrl:"./step2/step2.template.html",
        controller : "step2"
    })
    .when("/step3",{
        templateUrl:"./step3/step3.template.html",
        controller : "step3"
    })
    .when("/resume",{
        templateUrl:"./resumeView/resume.template.html",
        controller:"resume"
    });
});