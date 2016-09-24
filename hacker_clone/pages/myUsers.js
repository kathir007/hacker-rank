angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.question = '';
$scope.answer = '';
$scope.users = [
{id:1, question:'What is object'},
{id:2, question:'define'}
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.hideform = true; 
$scope.editUser = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.question = '';
    } else {
    $scope.edit = false;
    $scope.question = $scope.users[id-1].question;
     
  }
};

$scope.$watch('option');
$scope.$watch('answer');
$scope.$watch('question');
});