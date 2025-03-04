# JAVA SCRIPT
Es un lenguaje de programación; un lenguaje interpretado línea por línea y en tiempo real.

- Es un lenguaje de programación de alto nivel. Es interpretado y orientado a objetos. Lo utilizamos para crear contenido dinámico e interactivos en sítios webs.

- Alto nivel: Está diseñado para ser fácil de leer y escribir por humanos.
- Interpretado: Que se ejecuta en tiempo real línea por línea y NO necesita ser compilado (renderizado).

```js
let numero = 1;
console.log("Linea 1 y número vale: , numero"); 
// imprime en consola el texto  "Linea 1 y numero vale: 1"
numero = numero + 2; //numero vale 3
console.log("Linea 2 y número vale: ", numero);
// imprime en consola el texto "Linea 2 y el numeor vale: 3"
```

- JavaScript es un lenguaje orientado a objetos. Js utiliza un paradigma (OOP - Object Oriented Programming), significa que organiza su código en "objetos". Un objeto es una colección de `propiedades`(características) y `métodos` (funciones) que se pueden leer y manipular.

Perro:
// Propiedades
- color: blanco y negro
- nombre: Lasie
// Método
- ladran ()
- moverLaCola ()

```js
// ejemplo de propiedades y métodos
const alumno = {
    nombre: "Lucía Perez", // Características
    edad: 35, // Características
    direccion: {
        calle: "calle falsa", // Porpiedad con propiedades
        num: 123
    }
    hobbies: ["futbol", "programar", "leer"]; // Es una lista
    saludar:function () { //Funciones
        console.log("hola, mi nombre es lucía");
    }
}

console.log(alumno.direccion.num)

const direccion = alumno.direccion.calle+" "+alumjo.direccion.num;
console.log(direccion); // Calle falsa 123

// Para imprimir el nombre del alumno usamos algo como:
console.log(alumno.nombre);
console.log("Me llamo", alumno.nombre, "y tengo", alumno.edad, "años"); // Me llamo Lucía Perez y tengo 35 años

        // Utilizamos la constante y le añadimos un punto para buscar dentro de ella. En este caso la constante es `alumno` y queremos buscar el nombre, así que haremos: alumnos.nombre

// Para ejecutar un método / función, tenemos que utilizar () al final. Pero sigue la misma dinámica que en la primera parte

alumnos.saludar();
```

## Dónde podemos probar/codificar con JS

- En el navegador: En la pestaña de consola.
- En etiquetas de `<script>` dentro de HTML, y se suelen poner al final antes de cerra el </body>
- Se pueden usar archivos externos con la extensión `.js`linqueando en nuestro html: <script src="./js/mijs.js> `buscar el resto de apuntes que estan el la clase grabada`
-   Usar extensión en VSC -> Quokka 


# Funcionalidades

- Manipulación del DOM (Document Object Model): Agregar, modificar o quitar elementos HTML y CSS.
- Procesar Formularios: Verificar datos ingresados por el usuário y realizar formularios complejos de múltiples secciones.
- Manejo de animaciones: Manipular efectos visuales y animaciones en nuestra web.
- Manejo de Eventos: Responder a las acciones del usuario, como por ej: Hacer click, mover el mouse, desplazarse por la web...
- Comunicación asíncrona con servidores mediante AJAX/Fetch: enviar y recibir datos de un servidor sin tener que recargar la página.

## Tipos de Datos
- números: enteros, decimales, positivos, negativos, etc.
- Cadenas de textos (strings): textos, palabras, frases, 1 letra. Se puene escribir entre comillas 'simples', "dobles" o `backticks`.
- Booleanos: verdadero o falso.
- Listas de cosas (arrays): Se escriben con corchetes [] y los items se separan con coma.
- Objetos (object): Colección de propiedades (características) y métodos (funcionalidades) y se escriben con `{ }`.

```js

//PRIMITIVOS
let texto = "Hola alumnos CEI";
let textoConComillas = 'Hola estoy "bien" ';
let textoConComillasDobles = "I'm tomy";
let texto = `Quiero comillas 'simples' y "dobles"`; // template string (PLANTILLA)

let numero = 123
let numero2 = "123" // "123"
numero2 = Number(numero1) // 123

let entero = 25; // Número entero
let decimal = 22.30; // Número decimal
let negativo = -5; // Negativo //El guión medio no se puede usar en variables
const PI = 3.14159;

let estaEncendiendo = false;
let isPrimary = true;
let onActive = false;

    // estas clases de arriba las utilizamos con los condicionales (if)


// REFERENCIALES

// objeto
const alumno ={
    nombre: "Mario",
    edad: 33,
    isRecibido: false,
    presentarProyecto: function() {
        this.isRecibido = true;
        this.edad = 34;
    }
    irseDeVacaciones: function() { ... }
}

alumno.edad; // 33
alumno.presentarProyecto (); // esto ejecuta, presenta el proyecto

// Listas o ARRAYS

const alumnosDeDW = ["JHON", "Sonia", ...];
const edades = [23, 26, 72];

edades[0]; // 23
edades[1]; // 26

cont ListaMixta = [1, "juan", true, {val1: "hola", val2: "chau"}];

// Las listas comienzan su índice en 0
console.log( alumnosDeDW[0]) // "JHON"
console.log(alumnosDeDW[1]) // "Sonia"

// para escribir su valor en una lista
alumnosDeDW[0] = "Jhon Edward"
console.log(    alumnosDeDW[0]  ) //"Jhon Edward"


// Cómo escribir en un objeto
const alumno ={
    nombre: "Mario",
    edad: 33,
    isRecibido: false,
    presentarProyecto: function() {
        //this es para referisre a ESTE objeto.
        this.isRecibido = true;
        this.edad = 34;
    }
    irseDeVacaciones: function() { ... }
}

alumno.edad = 37;
```



## Variables y tipos de datos 

```js

// Number: Representa valores numéricos, incluyendo enteros y decimales
let numero = 42;
console.log(numero); // Output: 42

// String: Representa secuencias de caracteres (texto)
let texto = "Hola, mundo!";
console.log(texto); // Output: Hola, mundo!

// Boolean: Representa valores de verdadero (true) o falso (false)
let esVerdadero = true;
console.log(esVerdadero); // Output: true

// Null: Representa la ausencia intencionada de un valor
let valorNulo = null;
console.log(valorNulo); // Output: null

// Undefined: Representa una variable declarada pero sin valor asignado
let indefinido;
console.log(indefinido); // Output: undefined

// Symbol: Representa un valor único e inmutable, útil para identificadores únicos
let simbolo = Symbol("identificador");
console.log(simbolo); // Output: Symbol(identificador)

// BigInt: Se usa para representar números enteros muy grandes que no pueden representarse con Number
let numeroGrande = BigInt(9007199254740991);
console.log(numeroGrande); // Output: 9007199254740991n

```