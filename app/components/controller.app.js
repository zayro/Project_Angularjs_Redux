module.exports = function ($scope) {
  $scope.firstName = 'John';
  $scope.lastName = 'Doe';
  $scope.message = 'Demo';

  var onSuccess = function (response) {
    $scope.status = response.status;
    $scope.data = response.data;

};

var onError = function (response) {
    $scope.status = response.status;
    $scope.data = response.data;

}
$scope.getStudent = function () {
    $http.get("/getdata").then(onSuccess, onError);

};

};
