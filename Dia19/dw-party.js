//------------------------------------------------------------
    // Paso 1. Obtener elementos de nuestro DOM (documento HTML)
    //------------------------------------------------------------
    const miBoton = document.querySelector("#btn-modo-oscuro");
    const body = document.querySelector("body");
    const sidebar = document.querySelector(".sidebar");
//------------------------------------------------------------
// Paso 2. Crear nuestras funciones.
//------------------------------------------------------------
    function cambiarAModoOscuro() {
       // body.classList.add("darkMode");
       console.log("Me hicieron Click");  // Console log era para imprimir en el inspeccionador de elementor.
        console.log("Mi boton es:");
        console.log(miBoton);
        body.classList.toggle("darkMode");
    }
// Agregar escucha de Click a miBoton y llamar a la función cada vez que lo apretan.
    miBoton.addEventListener("click",cambiarAModoOscuro);
//------------------------------------------------------------
//Paso 3. Ejecutar nuestro código.
//------------------------------------------------------------
//cambiarAModoOscuro();
console.log("Mi página esta funcionando");

//Podemos agregar HTML dentro de nuestro contenedor
sidebar.innerHTML = "Holaaa, estoy dentro de sidebar";




