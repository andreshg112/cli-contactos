// create the controller and inject Angular's $scope
app.controller('Ejemplo1Controller', function ($scope) {
    $scope.message = 'AngularJS en TecnoParque';
    
    $scope.Show=function(){
      alert($scope.message);
    };
});

// create the controller and inject Angular's $scope
app.controller('Ejemplo2Controller', function ($scope) {

    $scope.message = 'AngularJS en TecnoParque';

    $scope.users = [
        { id: 1, famname: 'smith', name: 'john' },
        { id: 2, famname: 'last', name: 'first' }
    ];

    $scope.UserActual =  $scope.users[0] ;

    $scope.getFullName = function (user) {
        return user.name + ' ' + user.famname;
    };
});
