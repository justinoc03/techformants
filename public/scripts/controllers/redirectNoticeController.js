myApp.controller("redirectNoticeController", ['$scope','$timeout', '$location', '$interval', function($scope, $timeout, $location, $interval){
  console.log('In redirectNoticeController');

  //create timeout redirect after 3 seconds
  $timeout(function(){
   $location.path('/home');
 }, 3000);

 //generic counter
 //   var count = 0;
 //
 //   function callAtInterval() {
 //       count ++;
 //       console.log("Interval occurred", count);
 //   }
 //
 // $scope.test = function(){
 //   $interval(callAtInterval, 1000);
 // };


}]);
