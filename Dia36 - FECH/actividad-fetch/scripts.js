// ---------------------------------------------------------------
// Parte 1: Declaramos nuestras variables y referencias del DOM
// ---------------------------------------------------------------

const cargarDatos = document.querySelector("#cargarBtn");
const limpiarDatos = document.querySelector("#limpiarBtn");
const filtrarDatos = document.querySelector("#filtrarBtn");  // Corregido el ID

const error = document.querySelector("#error");
const errorText = document.querySelector("#errorText");
const spinner = document.querySelector("#spinner");
const perfiles = document.querySelector("#perfiles");

const listaUsuarios = [];

// ---------------------------------------------------------------
// Parte 2: Funciones y Event Listeners
// ---------------------------------------------------------------

// Función para Mostrar/Ocultar Spinner
const toggleSpinner = (visible) => {
    if (visible === "on") {
        spinner.classList.remove("hidden");
    } else {
        spinner.classList.add("hidden");
    }
};

// Función para Mostrar Error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    error.classList.remove("hidden");
};

// Función para Ocultar Error
const ocultarError = () => {
    error.classList.add("hidden");
};

const mostrardatos = (listaDeUsuarios) => {
    listaDeUsuarios.forEach(usuario=>{
        const {id, nombre, profesion, habilidades, experiencia, avatar} = usuario;
        perfilesContainer.innerHTML+=
        ` <div class="profile-card bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex items-center justify-center h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="${avatar}" alt="${nombre}">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">${nombre}</h3>
<p class="text-indigo-600 font-medium">${profesion}</p>
                    <div class="mt-3">
                        <p class="text-gray-700"><span class="font-semibold">${experiencia}</span> 3 años</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span>
                         <span class="bg-indigo-100 text-indigo-800 hover:bg-indig
<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                        <span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                    </div>
                </div>
            </div>
            `
    })
    // imprimir en pantalla las tarjetas de usuario

}

const cargarDats = async () => {

    try {
        ocultarError();
        toggleSpinner("on");

        const response = await fetch("./db/datos.json");

        const datos = await response.json();

        console.log(datos);
        mostrardatos(datos);

    } catch (e) {
        console.warn("Tuvimos un error obteniendo los datos");
        mostrarError("Error al cargar los datos");
    } finally {
        toggleSpinner("off");
    }
};



cargarBtn.addEventListener("click", cargarDatos);

// ---------------------------------------------------------------
// Parte 3: Código de nuestra app
// ---------------------------------------------------------------

mostrarError();
toggleSpinner("off");