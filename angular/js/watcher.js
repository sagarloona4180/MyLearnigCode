/**
 * Created by Sagar on 6/3/2017.
 */
  var  timer_module=angular.module("timer",[]);
   timer_module.controller("timerController",["$scope","$interval",function ($scope,$interval) {


      $scope.hour=2;

      $scope.min=29;
     
      $scope.sec=60;

     $scope.companyEmployye={
      name:'sagar',
      salary:6000,
      address:'kathua'
     };

     $scope.companyEmployyees=[{
      name:'sagar',salary:6000,address:'kathua'
     },{
      name:'Aman',salary:61000,address:'jammu'
     }
     ,{
      name:'Ajay',salary:56000,address:'chandigarh'
     }];



        var start_timer=  $interval(function () {
              $scope.sec=$scope.sec-1;
          }, 1000);


            $scope.$watch("sec",function (newValue,oldValue) {



                if(newValue==0 && $scope.sec==0 && $scope.min==0)
                {

                    console.log("test finish");
                    $interval.cancel(start_timer);
                    return;
                }
                if(newValue==0)
                {

                    $scope.min=$scope.min-1;
                    $scope.sec=60;
                }

            });

       $scope.$watch("min",function (newValue,oldValue) {



           if(newValue<0)
           {

               $scope.hour=$scope.hour-1;
               $scope.min=59;
               $scope.sec=60;
           }

       });

// this will work with every properity because  true  are  written  at the end 
  // otherwise it will only work for inseertion and deletion of propeerity 
    $scope.$watch('companyEmployye',function(newValue,oldValue)
    {
          if(newValue!=oldValue)
          {
$scope.companyEmployye.salary=7000;
console.log("salry chnge in watch ");

          }


    },true);

//this work in  change  of any of   either salary or addresss
    $scope.$watchGroup(['companyEmployye.salary','companyEmployye.address'],
      function(newValue,oldValue)
    {
          if(newValue!=oldValue)
          {
$scope.companyEmployye.salary=7000;
console.log("salry chnge in watch ");

          }


    });
// watch collection to add and  delete items inemployee

$scope.$watcCollection('emp',
      function(newValue,oldValue)
    {
          if(newValue!=oldValue)
          {
$scope.companyEmployye.salary=7000;
console.log("salry chnge in watch ");

          }


    });
///to work above for evey item modification then use  true with watch 
