'use strict';
var name = "";
var clasificar = "";

name = prompt("Ingrese nombre de usuario: ");


if (name == "lola" || name == "lili") {
    alert("Bienvenida," + name);

} else if (name == "lulu" || name == "lola") {
    alert("Bienvenida de nuevo," + name);

} else {
    alert("Lo siento pero el usuario que has introducido no está registrado");
}