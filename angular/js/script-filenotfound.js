 var app=angular.module("app",[]);



   app.controller('StudentController', ['$scope','CountryDataService',function($scope,CountryDataService){

   CountryDataService.empdata(function(response,error){
        $scope.data = response;

    });    
    





 app.service('CountryDataService', ['$http', '$log', function($http, $log){
    this.empdata= function(send_back){
        $http({
            url: '../data/data.json',
            method: 'POST'
        }).then(function(resp){
           console.log(resp.data);
           console.log(resp.status);
           send_back(resp.data,resp.status);
        },function(resp){
            $log.error("ERROR occurred");
        });
    };
}]);