var app=angular.module('app',[]);

app.controller("Commentctrl", ['$scope', function($scope){
	  $scope.reviews=review;


}]);


app.controller('ReviewController', function($scope) {
$scope.comment = {
	    star:"",
	   comment:"",
       author:""};



  $scope.addReview = function(reviews) {
    console.log("method worrking");
     reviews.push($scope.comment);
     $scope.comment={};
    
  };

  $scope.submitForm = function(formValid,reviews){
  if(formValid) {
      this.addReview(reviews);
       alert("form  is   valid")
  }else
  {
  	 alert("form  is  not  valid")
  }
};
});

var review=[

{
  star:5,
  comment:"this is wonder full ",
  author:'kumar.sagar479@gmail.com'},
  {
  star:3,
  comment:"it looks nice ",
  author:'sagarmca2k13@gmail.com'}];