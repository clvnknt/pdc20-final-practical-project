var app = angular.module("registerApp", []);

app.controller("registerCtrl", function($scope) {
  $scope.submit = function() {
    if ($scope.user.username && $scope.user.email && $scope.user.password && $scope.user.password === $scope.user.confirmPassword) {
      window.location.href = 'home.html';
    } else {
      alert("Please enter all the details correctly");
    }
  }
});

var app = angular.module("loginApp", []);

app.controller("loginCtrl", function($scope) {
  $scope.submit = function() {
    if ($scope.user.username && $scope.user.password) {
      window.location.href = 'home.html';
    } else {
      alert("Please enter all the details correctly");
    }
  }
});
