var app = angular.module('universidadApp',[ ]);

app.controller('profesorCtrl', function(){
  this.profesor = profesorData;
});

var profesorData = {
  nombre : "Juan Carlos Pineda",
  bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy un apasionado instructor de matematicas aplicadas cuanticas, mas orientado",
  edad: 47,
  foto: "img/juancarlos.jpg"
}
