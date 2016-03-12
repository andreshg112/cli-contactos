//http://www.dotnetcurry.com/showarticle.aspx?ID=1054
//https://github.com/dotnetcurry/SPA-Angularjs-ASPNET-WebAPI
var app = angular.module("ApplicationModule", ["ngRoute"]);
app.factory('Factoria', function () {
    var value="SIN DATO";
    var data = {
        getValue: function () {
            // codigo magico
            return value;
        },
        setValue: function (v) {
            value=v;
        }
    }
    return data;
});
//Defining Routing
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/showemployees',
    {
        templateUrl: 'crud/EmployeeInfo/ShowEmployees.html',
        controller: 'ShowEmployeesController'
    });
    $routeProvider.when('/addemployee',
    {
        templateUrl: 'crud/EmployeeInfo/AddEmployee.html',
        controller: 'AddEmployeeController'
    });
    $routeProvider.when("/editemployee",
    {
        templateUrl: 'crud/EmployeeInfo/EditEmployee.html',
        controller: 'EditEmployeeController'
    });
    $routeProvider.when('/deleteemployee',
    {
        templateUrl: 'crud/EmployeeInfo/DeleteEmployee.html',
        controller: 'DeleteEmployeeController'
    });
    $routeProvider.otherwise(
    {
        redirectTo: '/'
    });
}]);



