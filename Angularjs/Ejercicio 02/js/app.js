//  ! Define un módulo AngularJS llamado 'universidadApp' sin dependencias.
var app = angular.module('universidadApp', []);

//  * Define un controlador llamado 'profesorCtrl' dentro del módulo 'universidadApp'.
app.controller('profesorCtrl', function ($scope) {
    //  ? Asigna el objeto 'profesorData' al ámbito (scope) de este controlador.
    $scope.profesor = profesorData;
    //  ? Inicializa un objeto vacío llamado 'editando' en el ámbito.
    $scope.editando = {};
    $scope.mostrarCaja = false

    //  ? Define una función llamada 'EditarProfesor' en el ámbito.
    $scope.EditarProfesor = function () {
        //  ? Copia los datos del profesor al objeto 'editando' usando angular.copy().
        angular.copy($scope.profesor, $scope.editando);
        $scope.mostrarCaja = true
    };

    //  ? Define una función llamada 'GuardarCambios' en el ámbito.
    $scope.GuardarCambios = function () {
        //  ? Copia los datos editados del objeto 'editando' de vuelta al objeto 'profesor'.
        angular.copy($scope.editando, $scope.profesor);
    };

    //  ? Define una función llamada 'CancelarCambios' en el ámbito.
    $scope.CancelarCambios = function () {
        //  ! Restablece el objeto 'editando' a un objeto vacío.
        $scope.editando = {};
    };
});

//  ? Define un objeto 'profesorData' con información de un profesor.
var profesorData = {
    nombre: 'Juan Carlos Pineda',
    bio: 'Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy un apasionado instructor de matematicas aplicadas cuanticas, mas orientado a la fisica termonuclear. Mi vocacion es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.',
    edad: 47,
    foto: 'img/juancarlos.jpg',
};
