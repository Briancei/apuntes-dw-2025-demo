 ## LocalStorage

 Sirve para almacenar info en nuestro navegador.
 la información se guarda según el dominio.
 Solo guarda STRINGS (textos), si quiero guardar Arrays, o Objetos, utilizamos JSON. Para ello usamos ``"JSON.stringify(nuestraLista);"`` y para volver a tener nuestros datos en JS, usamos 
 `JSON.parse(nuestroString)`

 ```js
localStorage.setItem("edad",25); // "25"
localStorage.getItem("edad"); //"25" <- Texto

 ```

 Para que se usa:

 - guardar preferencias del usuario: "modo claro/oscuro", tamaño de fuente, si la barra lateral esta abierta.
 - Recordar las decisiones del usuario, por ejemplo si ya acepto o no un mensaje de bienvenida.
 - almacenar datos sin necesidad de un servidor. Por ejemplo CARRITOS DE COMPRA!

 ```js
 // Catalogo.html
 const productos=["producto1", "producto2", "producto 25"];
 productos.push("Producto 4");
 const textoAGuardar = JSON.stringify(productos); // convierto mi array a un string
 localStorage.setItem("listaDeProductos", textoAGuardar);

 // checkout.html
 const textoProductos = localStorage.getItem("listaDeProductos");
 const listaProductos = JSON.parse(textoProductos);

 # SetTimeout

 // versión de función externa
 let sumar = () => {

 }
 const idTimeout = setTimeout(sumar,2000);

// versión de una sola linea

const idTimeout = setTimeout(()=>{
    
},2000);

// Quitar el timeout

clearTimeout(idTimeout);

#SetInterval

const idInterval = setInterval(sumar, 2000);
clearInterval(idInterval);
```



