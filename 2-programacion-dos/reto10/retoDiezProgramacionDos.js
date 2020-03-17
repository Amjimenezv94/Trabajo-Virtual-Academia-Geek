'use strict';

//cuantas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, 
//este código debería de mostrar un mensaje con el número "525600".


const edad = document.querySelector(parseInt('.list'));
const diasPorAño = 365;
const horasPorDia = 24;



horasTotalVividas = edad * diasPorAño * horasPorDia;

console.log(" Usted ha vivido " + horasTotalVividas + " horas");