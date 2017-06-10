var app=angular.module("app",[]);


app.controller('TabController', function(){
  this.tab = 1;
  this.setTab = function(selectedTab) {
    this.tab = selectedTab;
    console.log(selectedTab);
  };
  this.isSet = function(givenTab) {
    return this.tab == givenTab;
  };
});