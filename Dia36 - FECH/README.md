# Contenido Asíncrono o Sincrónico

La sincroía es la ejecucción de tareas en un orden secuencial, es decir, una tarea se ejecuta despues de otra.

```js
console.log("paso 1");
traerDatos();
console.log("paso 3");

function traerDatos() {
    esperar(3000);
    console.log("paso 2");
}

// Simulador de tiempo
function esperar(milisegundos){
    const start= new Date().getTime();
    while( new Date().getTime() - start < milisegundos)
}
```

La ``asíncronia``es la ejecucíon de tareas en orden No secuencial, es decir una tarea se puede ejecutar antes de la que la anterior haya terminado.

La obtención de datos asíncronos se utilizan para:
- Traer información de DB (data base)
- Traer información de una API(Aplication program interface)
- Manipulación de nuestros propios archivos 

Para lograr una tarea asíncrona, simplemente debemos enviar como parámetro, una función de `callback` que se ejecutará al finalizar la tarea.

// traerUnMarcador("ramon", dibujarenLapizarra())


```js
console.log("paso 1");
traerDatos();
console.log("paso 3");

function traerDatos() {
    setTimeout(()=> {
        console.log("paso 2");
    }, 3000);
    
}
```
En JS, debido a la ejecución ocurre en un solo hilo (callstack), la asincronía permite que el código siga corriendo mientras espera tareas lentas como leer archivos, o hacer solicitudes HTTP. Esto evita que la interfaz de usuario se congele mientras espera la respuesta.

## Funciones de Callback

## Ejercicio
- Crear un código que muestre por consola:

1) Un comensal solicita a un camarero un entrante.
2) El camarero va a buscar el plato solicitado (asíncrona).
3) La persona toma un vaso de agua mientras espera.
4) El camarero lleva el plato a la mesa.
5) La persona se come el plato de comida.

```js
let plato="Ensalada";
console.log("1) El comensal solicita a un camarero un entrante.",plato);
hacerPedido(plato,()=>{
    console.log("4) El camarero lleva el plato a la mesa.");
     console.log("5) La persona se come el plato de comida.");

})
console.log("3) La persona toma un vaso de agua mientras espera.");


function hacerPedido(plato, callBack){
    console.log("2) El camarero ha buscado el plato solicitado.", plato);

    setTimeout( ()=> {
        //Luego de preparar el plato ejecuto la función de callback.
        callBack()
    
    }, 3000);
};


```

# Promesas 

Una promesa es un objeto que representa la `terminación` o el `fracaso` de una operación asíncrona.
Puede estar en uno de estos 3 estados:
- Pendiente: cuando aún no se ha completado, y no se sabe si se completará con éxito o no.
- Resuelta: (resolve) cuando se ha completado con éxito.
-  Rechazada: (reject) cuando ocurre un error.

```js
const miPromesa = new Promise((resolve, reject)=> {
 console.log("Ejecutando lo que te prometí");

 setTimeout(()=>{
    resolve("EXITO, presente el proyecto");
 },3000);
});

miPromesa.then(resultado => console.log(result))
                    .cath(error => console.log("tuve un error", error))
                    .finally(()=> console.log("Finalmente terminé ( con error o éxito"))



```

Las promesas se pueden encadenar: 
```js
miPromesa.then(resultado => { // result= 5
            return result+3;
    
})
        then(resultado => {// result2 = 8
            return result2
        })

        then(resultado => 
        console.log(result))
        then(resultado => 
        console.log(result))
        
                    .cath(error => console.log("tuve un error", error))
                    .finally(()=> console.log("Finalmente terminé ( con error o éxito"))

 ``` 

 ## Fetch API con .then() y .cath()

 Uno de los usos fundamentales de las promesas, es en el uso de la fetch API para realizar `peticiones HTTP` a otros servidores.

 La función `fetch()` nos permite hacer una petición, y nos devuelve una promesa.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then( response => response.json() )// convertir nuestra respuesta a JSON
    .then( datos => {
        // nuestro código con los datos
        console.log(datos)
    })
    .cath(error => console.warm("Tuvimos un error", error));


```

Ejercicio 

obtener 10 usuarios de la página de JsonPlaceholder, y mostrar en html una tarjeta para cada uno. `https://jsonplaceholder.typicode.com/users/`