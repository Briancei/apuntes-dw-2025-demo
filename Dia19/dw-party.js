//------------------------------------------------------------
    // Paso 1. Obtener elementos de nuestro DOM (documento HTML)
    //------------------------------------------------------------
    const btnDarkLight = document.querySelector("#btnDarkLight");
//------------------------------------------------------------
// Paso 2. Crear nuestras funciones.
//------------------------------------------------------------
console.log("Boton darklight es: ", btnDarkLight);  
// Agregar escucha de Click a miBoton y llamar a la función cada vez que lo apretan.
    btnDarkLight.addEventListener("click",() => {
        document.body.classList.toggle("u-Dark");

        if( document.body.classList.contains("u-Dark") ) {
            // Si tiene dark, mostrar el sol.
            btnDarkLight.querySelector("span").innerText="light_mode";
        } else {
            // Si no tiene dark, mostrar la luna.
            btnDarkLight.querySelector("span").innerText="dark_mode";
        }
        
    });

// Agregar escucha de Click a miBoton y llamar a la función cada vez que lo apretan.
  
//------------------------------------------------------------
//Paso 3. Ejecutar nuestro código.
//------------------------------------------------------------
//cambiarAModoOscuro();

//Podemos agregar HTML dentro de nuestro contenedor




