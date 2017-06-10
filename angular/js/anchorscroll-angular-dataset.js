var app=angular.module('app',[]);
 app.controller('AnchorScrollCtrl', ['$scope','CountryDataService',function($scope,CountryDataService){

CountryDataService.countrydata(function(response){
        $scope.data = response;
    });    
 	
 }]);

 app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
                             $location.hash(scrollLocation);
                             $anchorScroll.yOffset = 20;
                             $anchorScroll();
                         }
  }]);


 app.service('CountryDataService', ['$http', '$log', function($http, $log){
    this.countrydata= function(send_back){
        $http({
            url: '../data/country-city.json',
            method: 'POST'
        }).then(function(resp){
           console.log(resp.data);
           send_back(resp.data);
        },function(resp){
            $log.error("ERROR occurred");
        });
    };
}]);