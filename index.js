"use strict";
/*=== HOLA MUNDO ===*/
console.log("Hola Mundo!");
/*=== TIPOS DE DATOS ===*/
//////// STRING
// Comillas dobles:
const str1 = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2 = 'Hola, soy una cadena con comillas simples.';
// Template literals:
const nombre = 'Isa';
const edad = 20;
const str3 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// NUMEROS
const num1 = 10;
// BOOLEANS
// Valor booleano true:
const bool1 = true;
// Valor booleano false:
const bool2 = false;
// ARRAYS 
// Arreglo de números:
const numeros = [1, 2, 3, 4, 5];
// Arreglo de cadenas de texto:
const nombres = ["Juan", "María", "Pedro"];
// Arreglo de booleanos:
const valoresBool = [true, false, true];
// ENUM
// enum para días de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
// String Enums:
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "azul";
})(Colores || (Colores = {}));
// CLASES
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}
// FUNCIONES
function sumar(a, b) {
    return a + b;
}
////////////////////////////////
/*=== DATOS PRIMITIVOS ===*/
let estudiasteJavaScript = true;
if (estudiasteJavaScript) {
    console.log('Podés seguir viendo este curso de TypeScript');
}
else {
    console.log('Tenés que ver el curso de JavaScript');
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
/*=== ANY ===*/
let disney;
disney = 'Star-Wars y Marvel';
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
/*=== ARRAYS ===*/
let arreglo1 = [1, 2, 3, 4, 5, 6];
let arreglo2 = ['HTML', 'CSS', 'JS'];
arreglo1[0];
arreglo2[0].indexOf('HTML');
/*=== OBJETOS LITERALES ===*/
let programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomaMate: true,
};
let programador2 = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C#'],
    tomaMate: false
};
let programador3 = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true,
};
let programador4 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: null
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador3);
enviarCurriculum(programador4);
let dev = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true,
};
let dev2 = {
    name: 'Federico',
    tech: ['HTML', 'Cobol'],
    lastName: "Buenardo"
};
enviarCurriculum(dev);
/*=== CLASES Y POO ===*/
class Pelicula {
    proyectarEnCine() {
        console.log(`La película ${this.nombre} está siendo proyectada.`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
}
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
console.log(pelicula);
/*=== ENCAPSULAMIENTO Y GENÉRICOS ===*/
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Sergie Code');
sorteo.setNumero(7);
console.log(sorteo.sortear());
