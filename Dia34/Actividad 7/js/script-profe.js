const containerBloques = document.querySelector(".container");
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");

const cancionActual = document.getElementById("cancionActual");

let idCancionActual = 0;

const canciones = [
    {
        id: 1,
        titulo: "Canción 1",
        artista: "Artista 1",
        imagen: "img/foto-1.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }, {
        id: 2,
        titulo: "Canción 2",
        artista: "Artista 2",
        imagen: "img/foto-2.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }, {
        id: 3,
        titulo: "Canción 3",
        artista: "Artista 3",
        imagen: "img/foto-3.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }, {
        id: 4,
        titulo: "Canción 4",
        artista: "Artista 4",
        imagen: "img/foto-4.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }, {
        id: 5,
        titulo: "Canción 5",
        artista: "Artista 5",
        imagen: "img/foto-5.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }
];

// ------------------- NAVEGACIÓN ------------------- //
listaButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Obtenemos el ID del Target que quiero mostrar!
        const target = button.getAttribute('data-tab');

        // Actualizar la visibilidad de los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove('active');
            // Si el bloque es el que me interesa, agregar 'active'
            if (bloque.id === target) {
                bloque.classList.add("active");
            }
        });

        // Actualizar el botón activo de navegación
        listaButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

// ------------------- LISTAR TEMAS ------------------- //
canciones.forEach(tema => {
    const { id, titulo, artista, imagen } = tema;

    // Usamos innerHTML para crear nuestros temas
    containerCanciones.innerHTML += `               
        <li class="cardCancion">
            <img class="imgCancion" src="./${imagen}" alt="${artista}">
            <div>
                <h2 class="tituloCancion" >${titulo}</h2>
                <small class="artistaCancion" >${artista}</small>
            </div>
        </li>`;
});

// ------------------- REPRODUCTOR ------------------- //

// corregir este código. Usar la clase .cardCancion para añadir el addeventlistener
//canciones.addEventListener("click" (titulo) => {

//cardCancion.innerHTML = `      
                //<h4>${cancion}</h4>
                //<small>${artista}</small>`,

//});

const cardCancion = document.querySelector('.cardCancion');

cardCancion.addEventListener("click", () => {
  cardCancion.innerHTML = `      
    <h4>${cancion}</h4>
    <small>${artista}</small>`;
});