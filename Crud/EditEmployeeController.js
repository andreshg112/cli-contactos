app.controller("EditEmployeeController", function ($scope, $location, Factoria, SinglePageCRUDService) {
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
    //The Save method used to make HTTP PUT call to the WEB API to update the record
    $scope.save = function () {
        var Employee = {
            EmpNo: $scope.Employee.EmpNo,
            EmpName: $scope.Employee.EmpName,
            Salary: $scope.Employee.Salary,
            DeptName: $scope.Employee.DeptName,
            Designation: $scope.Employee.Designation
        };
        var promisePutEmployee = SinglePageCRUDService.put($scope.Employee.EmpNo, Employee);

        promisePutEmployee.then(function (pl) {
                $location.path("/showemployees");
        },
        function (errorPl) {
                      $scope.error = 'failure loading Employee', errorPl;
        });
    };
});