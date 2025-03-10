## Operación ternaria

Una forma de reescribir el `if..else`. 
Se componen de 3 partes: 1. Una expresión que se evalúa.
                         2. Expresión que se ejecuta en caso de ser cierta.
                         3. Expresión que se ejecuta en caso de ser falsa.

Simplifica la legibilidad, pero no se recomienda para anidar operaciones ternarias, o cuando el resultado de la operación es muy complejo.

No se puede utilizar ternarias si no tengo el "else.." (solo me sirven si tengo truthy y falsy)
- Solo se puede utilizar 

```js
let numero = 10;
if(numero % 2== 0){
    mensaje="Es par";
} else {
    mensaje="Es impar";
}



// Versión ternaria:
// Los iguales te dicen lo estricto que es.
// "0" == 0 true
// "0" === 0 false
let mensaje = (numero%2 ===0) ? "Es par"      :   "Es impar";

if( edad >=18){
    mensaje = "Es mayor de edad";
} else {
    mensaje = " Es menor de edad";
}

let mensaje = (edad>= 32) ? "Es mayor de edad"   :    "Es menos de edad";
let mensaje = edad>= 32 ? "Es mayor de edad"   :    "Es menos de edad";
let mensaje = edad>= 32 ? 
                            "Es mayor de edad"   
                           :"Es menos de edad";


```


```js

if( edad >=18){
    mensaje = "Es mayor de edad";
} else {
    mensaje = " Es menor de edad";
}


```
```js
// Función que recibe 2 números y devuelve el mayor.
function mayor(num1, num2){
    return num1;
} else {
    return num2;
}

function mayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
numMayor = mayor(5,3); // 5
numMayor = mayor(-5,7); // 7
```

Crear una función que reciba 2 parámetros (``jugador1``, ``jugador2``), y que devuelva si el jugador1 le gana al jugador en "piedra, "papel", "tijera".

```js
function queJugadorGana(jugador1, jugador2) {
    return (jugador1 === jugador2) ? "Empate" :
           (jugador1 === "piedra" && jugador2 === "tijera") ? "Jugador 1" :
           (jugador1 === "papel" && jugador2 === "piedra") ? "Jugador 1" :
           (jugador1 === "tijera" && jugador2 === "papel") ? "Jugador 1" :
           "Jugador 2";
}


// OTRO EJEMPLO

// CASO DE EMPATE 
 if(j1 === j2) { return "empataron"; }
```

## Recorrer arrays/Listas

## ForEach
- Recorrer cada item de una array, y ejecuta una función dentro del mismo.
Se le asigna una variable a cada item, ejemplo:
 listaAlumnos -> alumno
 listaLetras -> letra
 listaHobbies -> hobbie

```js
const letras = ["a","b","c"];
listaletras.forEach((letra) => {
    letra = letra.toUppercase();
    if(letra=="A"){
        console.log(letra);
        }
    }
)

```


## Modificar elementos con un forEach
```js
const listaletras = ["a","b","c"];

listaletras.forEach((letra, indice) => {
    letra = letra.toUppercase();
    if(letra=="A"){
        console.log(letra);
        }
    }
)

console.log(listaLetras);
```

## Map

Si deseamos generar una copia de la lista, podemos utilizar el método map(), quien crea un nuevo array con los resultados de la función flecha.

```js
const listaNumero = [1,2,3,4,5];

const nuevaLista = listaNumeros.map(()=>{
    return numero *2;
});

console.log(listaNumeros); //(5) [1,2,3,4,5]
console.log(nuevaLista); //(5) [2,4,6,8,10]
```

## Operaciones con bucles
