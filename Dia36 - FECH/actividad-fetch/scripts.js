// Parte 1: Declaramos nuestras variables y referencias al DOM

const cargarBtn = document.querySelector('#cargarBtn');
const limpiarBtn = document.querySelector('#limpiarBtn');
const filtrarBtn = document.querySelector('#filtrarBtn');

const spinner = document.querySelector('#spinner');
const perfilesContainer = document.querySelector('#perfiles');
const errorContainer = document.querySelector('#error');
const errorText = document.querySelector('#errorText');

const listaUsuarios = [];

// Parte 2: Funciones y Event Listeners

// Función para Mostrar/Ocultar spinner
const mostrarSpinner = (visible) => {
    if (visible === "on") {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    }
}

// Función para mostrar Error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    errorContainer.classList.remove('hidden');
}

// Función para ocultar Error
const ocultarError = () => {
    errorContainer.classList.add('hidden');
}

// Función para crear etiquetas de habilidades yo la tengo en el código de mostrarDatos
/* 
const crearTags = (habilidades) => {
    const miHtml = listaDeItems.map(item => `<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">${item}</span>`);

    return miHtml.join('');	
}
*/ 

const mostrarDatos = (listaUsuarios) => {
    perfilesContainer.innerHTML = ""; // Limpiar antes de insertar nuevos perfiles

    listaUsuarios.forEach(usuario => {
        const { nombre, profesion, habilidades, experiencia, avatar } = usuario;

        const perfilHTML = `
            <div class="profile-card bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex items-center justify-center h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="${avatar}" alt="${nombre}">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">${nombre}</h3>
                    <p class="text-indigo-600 font-medium">${profesion}</p>
                    <div class="mt-3">
                        <p class="text-gray-700"><span class="font-semibold">Experiencia:</span> ${experiencia} años</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                        ${habilidades.map(habilidad => 
                            `<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">${habilidad}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;

        perfilesContainer.innerHTML += perfilHTML;
    });
};

const crearTarjetaPerfil = (usuario) => {
    // Función vacía (puedes implementarla cuando la necesites) podemos copiar la dearriba para llamar a la funcion de mostrar datos directamente
}

/*
    CALLBACK HELL: Poner una función dentro de otra y de otra, dificultando la legibilidad.
*/

/*
const cargarDatos = () => {
    // Hacemos la petición fetch para obtener los datos del archivo JSON
    fetch("./db/datos.json")
        .then(response => response.json()) // Convertimos el JSON a un objeto de JavaScript
        .then(data => {
            // `data` contiene los datos extraídos del JSON ya convertidos a un objeto JavaScript
            console.log("Tus datos de la DB son:", data);

            // Llamamos a la función para mostrar los datos en el HTML
            mostrarDatos(data);
        })
        .catch(e => {
            // Capturamos cualquier error y lo mostramos en la consola
            console.error("Tuvimos un error obteniendo los datos:", e);
        });
};
cargarBtn.addEventListener('click', cargarDatos);
*/

/*----------------Async / Await-------------------------------*/

const cargarDatos = async () => {

    
    try {
        toggleSpinner("on");
        esoperar(2000);
        toggleSpinner("off");
        const response = await fetch("./db/datos.json");
        const listaUsuarios = await response.json();

        // Llamar a la función de mostrar Datos en el HTML
        mostrarDatos(listaUsuarios);
    } catch (e) {
        console.error("Tuvimos un error obteniendo los datos:", e);
    }


}
// funcioun esperar para simular un delay, es reutilizable.

function esperar(milisegundos) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milisegundos);
}

cargarBtn.addEventListener('click', cargarDatos);

// Parte 3: Código de nuestra App

mostrarError('Hola Mundo');
mostrarSpinner('on');
mostrarSpinner('off');