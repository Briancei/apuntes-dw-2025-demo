
## Async / Await

La desventaja de las promesas es que se vuelven difíciles de entender cuando se anidan. Por eso se desarrollo async / awayt.
Es más fácil de leer y entender que las promesas con callbacks.

## Ventajas

- Legibilidad: Se parece más al código síncrono tradicional, lo que facilita el seguimiento del flujo de ejecución.
- Manejo de errores: Con el uso de `try / catch` para manejar errores.
- Evitar callback hell": Ayuda a evitar el anidamiento excesivo de callbacks.

```js
// Mismo código utilizando async/await
async function traerDatos(){

    try {
    const respone = fetch ("https://jsonplaceholder.typicode.com/users");
    const listaUsuarios = await response.json();

    console.log (listaUsuarios);
    console.log (listaUsuarios[0]); // traer los datos de usuario

    // simulamos un segundo request, trayendo los posts del primer usuario.
    const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${listaUsuarios[0].id}`);
    const listaPosts = await responsePosts.json();
    } catch (error){
        console.log("Tuvimos un error:", error);
    }

}

const traerDatos= async () => {

}


```