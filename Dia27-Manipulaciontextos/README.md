# Manipulación de Textos.

1. Concatenación.

```js
const nombre="Lucia";
const apellido="Perez";

const nombreCompleto = nombre + " " + apellido; // (resultado Lucía Perez)Sin comillas queda el nombre junto. 

// Concatenar usando +=

let saludo= "Hola, ";
saludo+= "¿Cómo estas?" // Con esto agrega el conectido anterior y lo agrega
console.log(saludo); // Hola, ¿Cómo estas?

```

2. Interpolación.

Cuando usamos plantillas literales (``template literals`` / ``template Strings``), se pueden insertar ``variables`` o ``expresiones`` dentro de una cadena de texto usando ``${}``.

```js
let nombre ="Ana";
let edad =25;

// interpolación. (Sería la ideal)
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
//concatenacion comun
let mensaje = "Hola, mi nombre es "+nombre+" y tengo "+edad+" años.";

// Insertar expresión
const total =50;
const iva=0.21;
console.log(`El total con impuesto es ${total + (total*iva)}`);

const texto ="El total con impuestos";
["E", "l", " ", "t", "o", "t", "a", "l".....]
```
3. Métodos de Strings.

JS nos ofrece multiples mètodos/funciones para manipular cadenas de texto.

- `toUpperCase()` y `toLowerCase()`
Convierte todas las letras de una cadena en mayús o minús.

- `split()` 
Divide una cadena de texto en una lista/array basada en el separador elegido.

- `slice()`
Extrar una porción de la cadena basada en índices de inicio y fin (sin incluir el indice final)

- `replace()` y `replaceAll`
Reemplaza una parte de la cadena por otra(la primera ocurrencia).
Soporta expresiones regulares(regex) para potenciar la búsqueda.

- `trim()`
Eliminar todos los espacios en blanco al inicio y al fin de la cadena.

- `includes()`
verifica si una cadena contiene una subcadena específica.

- `startsWith()` y `endsWith()`
Verifica si una cadena comienza o termina con una subcadena específica.

- `repeat()`
Repite una cadena un número específico de veces.

```js
let texto = "Me encanta Javascript";

//ToUppercase, toLowerCase()
console.log(texto.toLowerCase()); //me encanta javascript ( me lo devuelve en minúsculas)
console.log(texto.toUpperCase()); //ME ENCANTA JAVASCRIPT ( me lo devuelve en mayÚsculas)

// Split.

const palabras= texto.split(" ");
console.log(palabras); // ["Me", "encanta", "Javascript"]

const palabras2= texto.split("encanta");
console.log(palabra2); // ["Me", "Javascript"]

const email="brianfernandezgimenez@alumnos.cei.es";
const separacion = email.split("@");
console.log(separacion); // ["brianfernandezgimenez", "alumnos.cei"]

// Slice.

let frase="Aprender javascript es divertido";
console.log("Parte de la frase:"), frase.slice((9,19)); //javascript.
console.log("Desde el indice 9 al final:", frase.slice(9)); //Javascript es divertido.

// Replace.
let frase= "hola mundo. hola hola hola hola universo";
console.log("remplazar 'hola' por 'Hola':" frase.replace("hola", "Hola")); // Cambia la primera que encuentre.
console.log("remplazar 'hola' por 'Hola':" frase.replaceAll("hola", "Hola")); // Cambia todos los que encuentre.

//Trim()
let frase= "      Hola mi nombre es luka     ";
console.log(frase.trim()); // Hola mi nombre es luka ( Quita los espacios de fuera, los que van entre palabras no.)

// Includes
let frase= " El sol brilla en el cielo";
console.log("Contiene 'sol'?" + frase.includes("sol")); //True
console.log("Contiene 'luna'?" + frase.includes("sol")); //False

//startsWith y endsWith

let frase="Javascript es genial";

console.log("¿Empieza con 'java':", frase.startWith("Java")); // TRUE
console.log("¿Empieza con 'java':", frase.startWith("Java")); // FALSE
console.log("¿Termina con 'genial':", frase.endstWith("Java")); // TRUE

// Repeat
let risa="Ja";
console.log("Me causa mucha gracias:", risa.repeat(3)); //JaJaJa

let frase="HolaComo Andan?";
console.log(frase.length); // 15 letras

```

Podemos combinar los métodos.

```js
let frase="      No me gusta Javascript en diseño web       ";

//trim(), toUpperCase(), replace()
let resultado = frase.trim() // Elimina espacios delante y detras.
                    .toUppercase() // Lo convierte a mayusculas
                    .replace("no me gusta", "me encanta"); // Remplaza me encanta por me gusta.

 // ME ENCANTA JAVASCRIPT EN DISEÑO WEB.               
```
