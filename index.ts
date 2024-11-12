/*=== HOLA MUNDO ===*/
console.log("Hola Mundo!")

/*=== TIPOS DE DATOS ===*/
//////// STRING
// Comillas dobles:
const str1: string = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2: string = 'Hola, soy una cadena con comillas simples.';

// Template literals:
const nombre: string = 'Isa';
const edad: number = 20;

const str3: string = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// NUMEROS
const num1: number = 10;

// BOOLEANS
// Valor booleano true:
const bool1: boolean = true;

// Valor booleano false:
const bool2: boolean = false;

// ARRAYS 
// Arreglo de números:
const numeros: number[] = [1, 2, 3, 4, 5];

// Arreglo de cadenas de texto:
const nombres: string[] = ["Juan", "María", "Pedro"];

// Arreglo de booleanos:
const valoresBool: boolean[] = [true, false, true];

// ENUM

// enum para días de la semana
enum DiasSemana {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo,
}

// String Enums:
enum Colores {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul",
}

// CLASES
class Persona {
  nombre: string;

  constructor(nombre: string) {
      this.nombre = nombre;
  }

  saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
}

// INTERFACES
// Interface básica:
interface Persona {
  nombre: string;
  edad: number;
}

// FUNCIONES
function sumar(a: number, b: number): number {
  return a + b;
}

////////////////////////////////

/*=== DATOS PRIMITIVOS ===*/
let estudiasteJavaScript = true
if (estudiasteJavaScript) {
  console.log('Podés seguir viendo este curso de TypeScript')
} else {
  console.log('Tenés que ver el curso de JavaScript')
}

let interMiami = 11
let fcDallas = 11
let messi = 1
let juegaMessi = true
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
  let motivo = ''
  if (juegaMessi) {
    equipo1 += messi
    motivo = 'porque juega Messi'
  }
  if (equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
  if (equipo1 == equipo2) console.log('Empatan')
  if (equipo1 < equipo2) console.log('Gana FC Dallas')
}
jugar(interMiami, fcDallas, juegaMessi)

/*=== ANY ===*/
let disney
disney = 'Star-Wars y Marvel'
console.log(disney)
disney = 15000000
console.log(disney)
disney = true
console.log(disney)

/*=== ARRAYS ===*/
let arreglo1 = [1, 2, 3, 4, 5, 6]
let arreglo2 = ['HTML', 'CSS', 'JS']
arreglo1[0]
arreglo2[0].indexOf('HTML')

/*=== OBJETOS LITERALES ===*/
let programador = {
  nombre: 'Sergie Code',
  tecnologias: ['React', 'Angular', 'Svelte'],
  tomaMate: true,
}
let programador2 = {
  nombre: 'Ricardo Buenardo',
  tecnologias: ['C#'],
  tomaMate: false
}

/*=== TYPE PERSONALIZADO ===*/
type Programador = {
  nombre: string
  tecnologias: string[]
  tomarMate: boolean | null
}
let programador3: Programador = {
  nombre: 'Sergie Code',
  tecnologias: ['React', 'Angular', 'Svelte'],
  tomarMate: true,
}
let programador4: Programador = {
  nombre: 'Federico',
  tecnologias: ['HTML', 'Cobol'],
  tomarMate: null
}
function enviarCurriculum(programador: Programador) {
  console.log(`Este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(programador3)
enviarCurriculum(programador4)


/*=== INTERFACE ===*/
interface IProgramador {
  nombre: string,
  tecnologias: string[],
  tomarMate?: boolean | null
}

let dev: Programador = {
  nombre: 'Sergie Code',
  tecnologias: ['React', 'Angular', 'Svelte'],
  tomarMate: true,
}

let dev2 = {
  name: 'Federico',
  tech: ['HTML', 'Cobol'],
  lastName: "Buenardo"
}

enviarCurriculum(dev)

/*=== CLASES Y POO ===*/
class Pelicula {
  nombre?: string
  protagonistas?: string[]
  actores?: string[]

  proyectarEnCine(){
    console.log(`La película ${this.nombre} está siendo proyectada.`)
  }

  constructor(nombre:string, protagonistas:string[], actores:string[]){
    this.nombre= nombre,
    this.protagonistas = protagonistas,
    this.actores = actores
  }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])

console.log(pelicula)

/*=== ENCAPSULAMIENTO Y GENÉRICOS ===*/
class Sorteo<T> {
  private ticket?: T
  constructor(private nombre: string) {}
  setNumero(ticket: T) {
    this.ticket = ticket
  }
  getNumero() {
    return this.ticket
  }
  getNombre() {
    return this.nombre
  }
  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`
  }
}
let sorteo = new Sorteo<number>('Sergie Code')
sorteo.setNumero(7)
console.log(sorteo.sortear())