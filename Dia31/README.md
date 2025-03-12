## Métodos de arrays/listas.

## Pop()
El método `pop()`, elimina el útilmo elemento de un array, y lo devuelve.
Este método modifica la longitud array.

```js

const frutas= ["manzana", "naranja", "tomate", "uvas", "bananas"];
let ultimoElemento = frutas.pop();

console.log(frutas); //(4)["manzana", "naranja", "tomate", "uvas"];
console.log(ultimoElemento); // "bananas"

```

## Método de pus.
El método de `push()` es uno de los más comunes, añade uno o mas elementos al final de un array. Me devuelve la nueva longitd del array.


```js

const frutas= ["manzana", "naranja"];
let nuevaLongitud= frutas.push("pera", "tomate");

console.log(frutas); //(4)["manzana", "naranja", "pera", "tomate"];
console.log(nuevaLongitud); // 4


```

## Shift()

El método `shift()` elimina el priumer elemento del array, y lo devuelve. Este método modifica la longitud del array.


```js

const frutas= ["manzana", "naranja", "tomate", "uvas", "bananas"];
const elementoQuitado= frutas.shift();

console.log(frutas); //(4)["naranja", "tomate", "uvas" "bananas"];
console.log(elementoQuitado); // "manzana"

```

## Unshift()
Con el método `unshift()` podemos añadir uno o más elementos al inicio del array. Devuelve la nueva longitud del array.

```js

const frutas= ["manzana", "naranja", "tomate"];
let nuevaLongitud = frutas.unshift("pera", "ciruela");

console.log(frutas); //(4)["pera" "ciruela", "manzana", "naranja" "tomate"];
console.log(elementoQuitado); // 5
```

## Splice()

El método `Splice()` cambia el contenido de un array: Eliminando, Creando o Reemplazando sus elementos.
Modifica el valor original, y recibe 3 parametros.
Devuelve los elementos eliminados.

- El índice del vector donde se va a realizar la operación.
- La cantidad de elementos a eliminar.
- Los elementos que quiero agregar.


```js
const frutas= ["manzana", "naranja", "tomate", "uvas", "bananas"];
let frutasEliminadas = frutas.splice(2,2, "pera", "ciruela"); // Los numeros son los espacios.

console.log(frutas); // ["manzana", "naranja", "pera", "ciruela", "bananas"];
console.log(frutasEliminadas); // ["tomate", "uvas"];

```

Ejercicio de Splice: 
```js 
let lenguajes= ["python", "java", "javascript", "php", "C++", "C#"];
lenguajes.splice(0,1); //["java", "javascript", "php", "C++", "C#"] // Elimina el primer valor de array(shift()).. quita python.

lenguajes.splice(-1,1); // ["java", "javascript", "php", "C++"] // Elimina el ultimo valor del array( pop()).. quita "C#"

lenguajes.splice(-1,0, "C", "Cobol"); // ["java", "javascript", "php", "C", "Cobol", "C++"] // Se posiciona al final, no borra nada y agrega "C" y "Cobolo".

// Quitar 2 elementos a partir del indice 2.

lenguajes.splice(2,2);
```


## ForEach

El forEach recorre cada elemento de una lista, y ejecuta la función indicada dentro del mismo.

```js
["a", "b", "c"].forEach(() =>{
    console.log(letra);
})
```

## MAP // La gente utiliza más este.

Devolver el doble de cada elemento:
```js
const listaNumeros= [5,15,7];
const listaNumerosDobles = listaNumeros.map ((num)=>{
    return num*2;

})
console.log(listaNumerosDobles); // [10,30,14]

// Optimizar de métodos de código(array).

const listaNumerosDobles = listaNumeros.map ((num)=>{
    return num*2; //quitar los parentesis 
})
// Se puede optimizar cuando nuestra funcion tiene una sola linea y esa linea es un return.
const listaNumerosDobles = listaNumeros.map (num => num*2);
```
## Buscar Item.

El método `find()` devuelve el PRIMER elemento del array que cumpla la función de prueba proporcionada. En caso contrario devuelve undefined.

```js
const numeros=[5,12,8,130,44,12];
const item = numeros.find(num => num> 10); // Código simplificado.
console.log(item);//12
const item = numeros.find((num) => { // Código largo.
    if(num>10){
        return num;
        //terminar programa
    };
})
```

## Buscar mútiples items

La función `filter()` devuelve un array/lista con TODOS LOS ELEMENTOS que cumplan la condición especifica.

```js
const numeros = [5,12,8,130,44,12];
const listaItems = numeros.filter(num=> num>10);
console.log(listaItems); // [12,130,44,12]

const personas= [
    {nombre: "Juan", edad:33},
    {nombre: "Pedro", edad:18},
    {nombre: "ana", edad:15},
    {nombre: "Luis", edad:9},
    {nombre: "María", edad:30}
    
];

// obtener una lista de las personas mayores de edad.

const listaMayores = personas.filter(persona => persona.edad >= 18);
console.log(mayoresDeEdad);

[
  { nombre: "Juan", edad: 33 },
  { nombre: "Pedro", edad: 18 },
  { nombre: "María", edad: 30 }
];

```
1. De una lista de números devolver solo los IMPARES.
2. De una lista de personas, imprimir su nombre.
    const Personajes = [
    { nombre: "Juan", edad: 33 },
    { nombre: "Pedro", edad: 18 },
    { nombre: "María", edad: 30 }
]
```js 
//-----------------------------------------------------------------------------
const numeros = [33,18,30];
const impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares); // [33,18]
//-----------------------------------------------------------------------------
const nombres = Personajes.map(persona =>);
console.log(persona.nombre); // ["Juan", "Pedro", "María"]
 ```          

3. Encuentra un libro con el título específico (buscar "La Odisea")
    const libros = [
        {titulo: 'El Quijote' autor: 'Miguel de Cervantes}`,
        {titulo: 'Cien años de soledad, autor: 'Gabriel García Márquez},
        {Titulo: 'La odisea', autor: 'Homero'}
    ]

```js 
// MAP
const libros = [
  { titulo: 'El Quijote', autor: 'Miguel de Cervantes' },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
  { titulo: 'La odisea', autor: 'Homero' }
];

const libroBuscado = libros.find(libro => libro.titulo === 'la odisea');

console.log(libroBuscado);

// Salida: { titulo: 'La odisea', autor: 'Homero' }


//-----------------------------------------------------------------------------
```
3b. Usar los métodos de string para búsquerdas parciales "cien años". 
```js
const texto = libros.find( libro=> libro.titulo.toLowerCase().includes('cien años'));

//------------------------------------------------------------------------------
```

4. Dado una lista de números desordenados, ordenar de menos a mayor (investigar)
```js

const numeros = [10, 3, 5, 1, 4, 9, 2];

numeros.sort((a, b) => a - b);

console.log(numeros); // [1, 2, 3, 4, 5, 9, 10]

```