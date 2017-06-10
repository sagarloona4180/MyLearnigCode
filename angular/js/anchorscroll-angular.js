var app=angular.module('app',[]);
app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
                             $location.hash(scrollLocation);
                             $anchorScroll.yOffset = 20;
                             $anchorScroll();
                         }
  }]);