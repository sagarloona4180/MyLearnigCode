var app=angular.module('app',['ngRoute']);


 app.config(function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home/:name/:salary/:email/:married', {
            templateUrl: 'test.html',
            controller: 'StudentController'
        })
        .when('/add',
        {
            templateUrl:'test2.html',
             controller: 'StudentController'

        });
  });
  app.controller('StudentController', ['$scope','$routeParams','CountryDataService',function($scope,$routeParams,CountryDataService){

   CountryDataService.empdata(function(response){
        

           
                $scope.data=response;
                 $scope.routingParameter='{name:"'+$routeParams.name+'",salary:'+$routeParams.salary+',email:"'+$routeParams.email+'",married:"'+$routeParams.married+'"}';
   
               var s=JSON.parse(JSON.stringify($scope.routingParameter));
              console.log(s);
               $scope.data.push(s);
                 console.log($scope);
              });    

 }]);

app.controller('AddController',['$scope','$location','$interpolate',function($scope,$location,$interpolate) {
$scope.name="";
$scope.email="";
$scope.married="";
$scope.salary=0;


   $scope.addEmp=function(data)
   {
          var url=$interpolate("/home/{{name}}/{{salary}}/{{email}}/{{married}}")($scope);
           console.log(url); 
            $location.path(url);

   }
    

 
}]);



 app.service('CountryDataService', ['$http', '$log', function($http, $log){
    this.empdata= function(send_back){
        $http({
            url: '../data/data.json',
            method: 'POST'
        }).then(function(resp){
           console.log(resp.data);
           send_back(resp.data);
        },function(resp){
            $log.error("ERROR occurred");
        });
    };
}]);