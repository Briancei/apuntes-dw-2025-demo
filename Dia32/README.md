# Día 32

## Listners para eventos de usuario.

 Son funciones que se ejecutan en respuesta a eventos específicos que ocurren en el DOM, como por ejemplo algunos son click, movimientos del mouse, teclas presionadas, teclas levantadas, etc- Para agregar un evento usamos ``addEventListener(evento, función)``

 Evento	Descripción

"click"	Cuando se hace clic en un elemento
"mouseover"	Cuando el mouse pasa sobre un elemento
"keydown"	Cuando se presiona una tecla
"submit"	Cuando un formulario se envía
"change"	Cuando un campo de entrada cambia
```js

// Seleccionar item del DOM.

const boton = document.querySelector('button');

// Agregar un event listener para el evento de click

boton.addEventListener("click", miFunction);
    console.log
```

## Pasar parametros a funciones con eventos.

A veces necesitamos enviar parametros adicionales a la función que maneja el evento.
```js

boton.addEventListener("click", miFunction(){
     miFuncion("Tomi")
});
// Ejecutar la función sin enviar parámetros.
boton.addEventListener("click", miFunction);
// Ejecutar la función enviando parámetro, la debo meter dentro de una función felcha.
boton.addEventListener("click",()=> miFunction("María"));
     

function miFunction(usuario){
    console.log(`HOLA ${usuario}`);
};


```

Ejercicios:
1. Cambiar el color de un elemento al hacerle click.
Crear 2 botónes (rojo y azul) que cambie el color de fondo de un bloque, al hacerle click. La función de cambiar el color tiene que ser la misma.

2. Mensaje al pasar el mouse:
Crear un elemento que muestre un mensaje cuando el ratón pase por encima de él.


## Párametro "e" (event/evento)

Es un objeto que contiene información sobre el evento ocurrido. Este se pasa automáticamente a la función que maneja el evento

```js

function handleClick(){
    console.log("El botón ha sido clickeado");
    console.log("Cordenadas del Mouse:", e.clientX, e.clientY);
}

boton.addEventListener('click', handleClick);

```

Ejercicio 3.

Formulario de entrada:
Crear un formulario que valide la entrada de un usuario, y muestre en pantalla si la entrada no es válida. (Crear input y formulario)