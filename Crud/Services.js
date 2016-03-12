app.service("SinglePageCRUDService", function ($http) {
    var uri="http://190.109.185.138:8034";
    //Function to Read All Employees
    this.getEmployees = function () {
        return $http.get(uri+"/api/Employee");
    };
    //Fundction to Read Employee based upon id
    this.getEmployee = function (id) {
        return $http.get(uri+"/api/Employee/" + id);
    };

    //Function to create new Employee
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: uri+"/api/Employee",
            data: Employee
        });
        return request;
    };

    //Function  to Edit Employee based upon id 
    this.put = function (id, Employee) {
        var request = $http({
            method: "put",
            url: uri+"/api/Employee/" + id,
            data: Employee
        });
        return request;
    };

    //Function to Delete Employee based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: uri+"/api/Employee/" + id
        });
        return request;
    };
});