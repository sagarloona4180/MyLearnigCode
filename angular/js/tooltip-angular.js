var myApp = angular.module("myApp", []);


myApp.controller("MyCtrl",function($scope)
{


 $scope.items = [{ name: "item 01", tooltip: "This is item 01 tooltip!"},
                    { name: "item 02", tooltip: "This is item 02 tooltip!"},
                    { name: "item 03", tooltip: "This is item 03 tooltip!"},
                    { name: "item 04", tooltip: "This is item 04 tooltip!"},
                    { name: "item 05", tooltip: "This is item 05 tooltip!"} ];
    console.log("MyCtrl");

});
   


myApp.directive('tooltip', function () {
    return {
        restrict:'A',
        link: function(scope, element, attrs)
        {
            $(element)
                .attr('title',scope.$eval(attrs.tooltip))
                .tooltip({placement: "right"});
        }
    }
});




myApp.controller("Ctrl1",function($scope){
 

})
myApp.directive('toggle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if (attrs.toggle=="tooltip"){
        $(element).tooltip();
      }
      if (attrs.toggle=="popover"){
        $(element).popover();
      }
    }
  };
})


