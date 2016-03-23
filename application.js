
console.log("hello");



myApp = angular.module('myApp', []);


myApp.controller('AssistanceFormController', ['$scope', '$http', function($scope, $http) {
  function errorMessage(code) {
    if (code == 201) {
      $scope.submitted = true;
      $scope.successMessage = "Your assistance request has been successfully submitted.";
    } else if (code == 401) {
      $scope.formError = "Sorry, you are not authorized to make this request."
    } else if (code == 500) {
      $scope.formError = 	"Oh no! Something completely unexpected happened!"
    } else if (code == 503) {
      $scope.formError = "We're down!!!!!! Come back later.....(please)"
    } else {
      $scope.formError = "Oh no! Something completely unexpected happened!"
    }
  };

  $scope.submitForm = function(assitance_form) {
    $scope.submitted = true;
    $http.post('http://localhost:49567/api/assistance-requests', assitance_form.form.data ).then( function successCallback(response) {
      errorMessage(response.status);
    }, function errorCallback(response) {
      errorMessage(response.status);
      $scope.assitance_form = assitance_form;
      $scope.submitted = false;
    });
  };

  $http.get( 'http://localhost:49567/api/service-types').then(function successCallback(response) {
    $scope.serviceTypes = response.data.data
  }, function errorCallback(response) {
  });


}]);
