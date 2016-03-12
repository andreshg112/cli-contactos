app.controller("DeleteEmployeeController", function ($scope, $location, Factoria, SinglePageCRUDService) {

    getEmployee();


    function getEmployee() {
        
        var promiseGetEmployee = SinglePageCRUDService.getEmployee(Factoria.getValue());

        promiseGetEmployee.then(function (pl) {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    }

    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteEmployee = SinglePageCRUDService.delete(Factoria.getValue());

        promiseDeleteEmployee.then(function (pl) {
            $location.path("/showemployee");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    };

});