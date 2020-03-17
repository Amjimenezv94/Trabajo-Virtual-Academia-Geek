'use strict';

//cuantas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, 
//este código debería de mostrar un mensaje con el número "525600".
var edad = 0;
const diasPorAño = 365;
const horasPorDia = 24;

edad = parseInt(prompt("Ingrese su edad en números: "));

horasTotalVividas = edad * diasPorAño * horasPorDia;

console.log(" Usted ha vivido " + horasTotalVividas + " horas");