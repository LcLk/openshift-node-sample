app = angular.module('app',['ngRoute','ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/page1', {
      templateUrl: '/views/page1.html',
      title: "Page1"
    }).
    when('/page2', {
      templateUrl: '/views/page2.html',
      title: "Page2"
    }).
    when('/page3', {
      templateUrl: '/views/page3.html',
      title: "Page3"
    }).
    when('/page4', {
      templateUrl: '/views/page4.html',
      title: "Page4"
    }).
    when('/page5', {
      templateUrl: '/views/page5.html',
      title: "Page5"
    }).
    otherwise({
      redirectTo: '/page1'
    });

  $locationProvider.html5Mode(true);
});


app.controller('NavCtrl',function($scope){
	$scope.pages = [
    {name: "first page", link:"page1"},
    {name: "second page", link:"page3"},
    {name: "third page", link:"page2"},
    {name: "fourth page", link:"page4"},
    {name: "fifth page", link:"page5"}
	];
});

app.controller("Page1Ctrl",function($scope){
  
});
app.controller("Page2Ctrl",function($scope){
  
});
app.controller("Page3Ctrl",function($scope){
  
});
app.controller("Page4Ctrl",function($scope){
  
});
app.controller("Page5Ctrl",function($scope){
  
});