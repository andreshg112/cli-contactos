app.service("contactosService", function ($http) {
    var uri = "http://localhost/api-contactos/contactos";
    this.get = function (id) {
        var req = $http.get(uri + '/' + id);
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri);
        return req;
    };
    this.post = function (registro) {
        console.log("post");
        var req = $http({
            method: 'POST',
            url: uri,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });
        return req;
    };
    this.put = function (id, registro) {
        console.log("put");
        var req = $http({
            method: 'PUT',
            url: uri + "/" + id,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });
        return req;
    };
    this.delete = function (id) {
        console.log("delete");
        var req = $http({
            method: 'DELETE',
            url: uri + "/" + id,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            }
        });
        return req;
    };   
});