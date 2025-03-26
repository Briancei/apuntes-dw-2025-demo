// Convertir el siguiente ejercicion en try/catch

console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");


console.log("3) la persona se toma el vaso de agua");

function pedirPlato(plato) {

    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {

            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);

console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}


// Actividad convertida en try / catch

console.log("1) solicitar al camarero un plato de ensalada de atún");

async function pedirPlato(plato) {
    pedirPlato("ensalada de atún");
    console.log("3) la persona se toma el vaso de agua");
    
    try {
        console.log("2) el camarero va a buscar el plato de comida:", plato);

        const response = await fetch(`http://restaurante.com/api/${plato}`);

        const datos = await response.json();

        console.log("Paso 4: El camarero lleva el plato de:", datos.plato);
        console.log("Paso 5: El comensal se come su comida");

    } catch (error) {
        console.log("No tenemos mas atún, lo siento");
    }
}


// Versión Fetch async/await

console.log("1) solicitar al camarero un plato de ensalada de atún");

async function pedirPlato(plato) {

        console.log("2) el camarero va a buscar el plato de comida:", plato);

        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}");

        const datos = await response.json();

        console.log("Paso 4: El camarero lleva el plato de:", datos.plato);
        console.log("Paso 5: El comensal se come su comida");


}

pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");

