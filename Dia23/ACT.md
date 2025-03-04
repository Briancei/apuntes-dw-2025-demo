# Actividad 1: Variables y Tipos de Datos

- Escribir un programa que defina variables de diferentes tipos y las imprima en la consola.

* Instrucciones:

*Crea variables de tipo Number, String, Boolean, Null, Undefined, Symbol, y BigInt.
Imprime cada variable en la consola usando console.log.*

* Act 1 resuelta

```js
const Tomy = {
    nombre: "Tomy";
    edad: 40,
    nacionalidad: "Española",
    vacunado: false,
    empleo: null,
    diasTrabajados: indefinido,
    //zodiaco: Symbol(piscis),
    //patrimonio: BigInt(30000000000)
    // Estas no se usan en javascript
}

console.log = ("nombre: " + Tomy.nombre + " edad: " + Tomy.edad)
// ------ Corrección

let numero = 10;
let string="Luciana";
let esMayorDeEdad=true; // o false
let  edad= null;
let noDefinida; // undefined
```



## Actividad 2: Operadores y Expresiones

Escribir un programa que realice operaciones aritméticas y compare valores.

Crea dos variables numéricas.
Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y guarda los resultados en variables.
Compara los dos números usando operadores de comparación y guarda los resultados en variables.
Imprime los resultados de las operaciones y comparaciones en la consola.

```js

// ------ Corrección

let num1 = 10;
const num2 = 5;
const num3 = "5";

let suma = num1 + num2;
let resta = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

let esMayor = num1 > num2; // true
console.log(num1 > num2) ; // true

let esIgual = (num3 == num2); // true
let esEstrictamenteIgual = (num3 === num2); // False

```

## Actividad 3: Estructuras de Control
Escribir un programa que use estructuras de control para tomar decisiones.

Crea una variable edad.
Usa una estructura if-else para imprimir un mensaje indicando si la persona es mayor de edad o no.
Usa un bucle for para imprimir los números del 1 al 10.

```js
const edad=18;
const tienePermiso = true;

if(edad >= 18){
    console.log("Es Mayor de edad"); 
} else {
    console.log("Es menor de edad");
}


// Ver si es mayor de edad, pero si no lo es, ver si tiene permiso para salir a bailar

if(edad >= 18){
    console.log("Es Mayor de edad");  
} else {
    if(tienePermiso == True ){
        console.log("Puede salir a bailar")
    } else {
        console.log("No Puede salir a bailar")
    }
}



if(edad >= 18){
    console.log("Es Mayor de edad");  
} else if(tienePermiso){
        console.log("Puede salir a bailar");
    } else {
        console.log("No Puede salir a bailar");
    }


// -------Bucle
console.log("iniciar bucle");

    // i++ -> "i = i+1";
for (let i=0 ; i < 5 ; i++) {
    console.log("Hacer una tarea", i);
}

console.log("termina el bucle");

```


## Actividad 4: Funciones

Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.
Crea una función sumar que reciba dos números como parámetros y devuelva su suma.
Llama a ambas funciones y muestra los resultados en la consola.


```js





```


## Actividad 5: Manipulación del DOM

Escribir un programa que manipule elementos del DOM.

Crea un archivo HTML con un elemento <div> con el id "contenedor".
Escribe un script que cambie el contenido de ese <div> al hacer clic en un botón.
Ejemplo (HTML y JS):