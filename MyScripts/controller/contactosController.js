app.controller('contactosController', function ($scope, contactosService) {
    //VistaModelo
    $scope.Contact = {}; //Objeto Actual
    $scope.Contacts = []; //Listado de Objetos
    $scope.editMode = false; // Modo de Edición
    //Cargar los datos
    loadRecords();
    //Function to Reset Scope variables
    function initialize() {
        $scope.Contact = {};
        $scope.Contact.nombre = 0;
        $scope.Contact.telefono = "";
    }
    
    function loadRecords() {
        var promiseGet = contactosService.getAll();
        promiseGet.then(function (pl) {
            $scope.Contacts = pl.data.result;
        },
                function (errorPl) {
                    $log.error('failure loading Contactos', errorPl);
                });
    }
    //Model popup events
    $scope.showadd = function () {
        initialize();
        $scope.editMode = false;
        $('#regModal').modal('show');
    };
    $scope.cancel = function () {
        console.log($scope.editMode);
        if (!$scope.editMode) {
            initialize();
        }
        $('#regModal').modal('hide');
    };
    $scope.get = function () {
        $scope.Contact = this.contact;
        $('#viewModal').modal('show');
    };
    $scope.showconfirm = function () {
        $scope.Product = this.product;
        $('#confirmModal').modal('show');
    };
    $scope.edit = function () {
        $scope.Contact = this.contact;
        $scope.editMode = true;
        $('#regModal').modal('show');
    };
    //Function to Submit the form
    $scope.add = function () {
        var Contacto = {};
        Contacto.nombre = $scope.Contact.nombre;
        Contacto.telefono = $scope.Contact.telefono;
        var promisePost = contactosService.post(Contacto);
        promisePost.then(function (d) {
            $scope.Contact.telefono = d.data.telefono;
            loadRecords();
        }, function (err) {
            alert("Some Error Occured " + JSON.stringify(err));
        });
    };
    //Function to Cancel Form
    $scope.cancelForm = function () {
        initialize();
    };
    //Functin Para Actualizar
    $scope.update = function () {
        var Contacto = {};
        Contacto.id = $scope.Contact.id;
        Contacto.telefono = $scope.Contact.telefono;
        Contacto.nombre = $scope.Contact.nombre;
        var promise = contactosService.put(Contacto.id, Contacto);
        promise.then(function (d) {
            loadRecords();
            alert("Guardó los Datos");
        }, function (err) {
            alert("Some Error Occured " + JSON.stringify(err));
        });
    };
    //Confirmar Para Eliminar
    $scope.showconfirm = function () {
        $scope.Contacto = this.contact;
        if (confirm("Desea Eliminar al Contacto:" + $scope.Contacto.nombre)) {
            var promise = contactosService.delete($scope.Contacto.id);
            promise.then(function (pl) {
                if (pl.data.result) {
                    alert("Contacto eliminado");
                    loadRecords();
                } else {
                    alert("Error eliminando en el servidor.")
                }
            },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                    });
        }
    };
});

