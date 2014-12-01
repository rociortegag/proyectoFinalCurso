//Creamos una instancia de angular
var aplicacion = angular.module('aplicacion', []);
//Definimos nuestro controlador Libros
aplicacion.controller('Libros', function($scope) {
    
    /*Creamos los campos que guardaremos de cada libro
     * Para cada controlador tendremos dos parametros su propio nombre y utilizaremos
     * una función callback a la cual le pasaremos el scope como parametro ($scope)
    */
   //_id identifica la posicion del libro
    $scope._id = null;
    $scope.nombredellibro = '';
    $scope.fechavencimiento = '';
    $scope.prestamorealizadopor = '';
    $scope.direccion = '';
    /*Declaramos nuestro array de esta manera para que se vayan almacenando los libros
     * cuando los vayamos introduciendo
     */
    $scope.libros = [];
            
    //Funcion que guarda o modifica el prestamo que se realiza
    $scope.guardarprestamo = function() {
        if ($scope._id == null) {
            $scope.libros.push({
                nombredellibro: $scope.nombredellibro,
                fechavencimiento: $scope.fechavencimiento,
                prestamorealizadopor: $scope.prestamorealizadopor,
                direccion: $scope.direccion
            });            
        } else {
            $scope.libros[$scope._id] = {
                nombredellibro: $scope.nombredellibro,
                fechavencimiento: $scope.fechavencimiento,
                prestamorealizadopor: $scope.prestamorealizadopor,
                direccion: $scope.direccion
            };
        }
        $scope.limpiarprestamo();
    }
    //Funcion que limpia los campos de regristros.
    $scope.limpiarprestamo = function() {
        $scope._id = null;
        $scope.nombredellibro = '';
        $scope.fechavencimiento = '';
        $scope.prestamorealizadopor = '';
        $scope.direccion = '';
    };
    //Cuando llamamos a la función recuperar prestamo obtenemos la informacion del prestamo que quedamos modificar
    $scope.recuperarprestamo = function(index) {
        $scope._id = index;
        $scope.nombredellibro = $scope.libros[index].nombredellibro;
        $scope.fechavencimiento = $scope.libros[index].fechavencimiento;
        $scope.prestamorealizadopor = $scope.libros[index].prestamorealizadopor;
        $scope.direccion = $scope.libros[index].direccion;
    };
    //Funcion que elimina los prestamos según el indice
    $scope.eliminarprestamo = function(indice) {
        var libros_actualizado = [];
        for (var i = 0; i < $scope.libros.length; i++) {
            if (i != indice) {
                libros_actualizado.push($scope.libros[i]);
            }
        }
        $scope.libros = libros_actualizado;
    };

});
