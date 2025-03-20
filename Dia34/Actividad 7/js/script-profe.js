const containerBloques = document.querySelector(".container");
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");

const cancionActual = document.getElementById("cancionActual");

let idCancionActual = 0;

let posicionTemaActual = 0;

listaTemas[4]

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
        <li class="cardCancion" data-id="${id}">
            <img class="imgCancion" src="./${imagen}" alt="${artista}">
            <div>
                <h2 class="tituloCancion" >${titulo}</h2>
                <small class="artistaCancion" >${artista}</small>
            </div>
        </li>`;


        // agarrar el último hijo agregado, para incluirle un eventlistener
        const cardCancion = containerCanciones.lastElementChild;
        cardCancion.addEventListener("click", () => {
          cargarCancion (id);
          document.querySelector("[data-tab='tab3']").click();
        });
    
});

// ------------------- REPRODUCTOR ------------------- //
const playBtn = document.querySelector (".fa-play");
const pauseBtn= document.querySelector (".a-pause");
const nextBtn= document.querySelector (".fa-step-forward");
const prevBtn=  document.querySelector (".fa-step-backward");
const audioPlayer= document.querySelector("#audioPlayer"); //Nuestro reproductor.

const divCurrentSongInfo = document.querySelector(".current-song-info");
pauseBtn.style.display = "none";

// funcion para cargar un tema

function cardCancion(id){
    // recorremos nuestras canciones, y obtenemos solo la que me interesa.
    const cancion= listaTemas.find(tema => tema.id == id);

    if(!cancion){ return; }

    const {titulo, imagen, artista, fuente} = cancion;
        console.log(cancion);
        audioPlayer.src = fuente;
        idCancionActual = id;

        divCurrentSongInfo.innerHTML = `<img src="${imagen}" alt="${artista}">
                                        <h2>${titulo}</h2>
                                        <p>${artista}</p>`;

    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display= "inline";
}

// Event Listeners de botones de reproductor
playBtn.addEventListener("click", () => {
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display= "inline";
});

pauseBtn.addEventListener("click", ()=>{
    audioPlayer.play();
    playBtn.style.display = "inline";
    pauseBtn.style.display= "none";
});

    nextBtn.addEventListener("click", ()=>{
        posicionTemaActual++;
        const idCancion = listaTemas [posicionTemaActual].id;
        cargarCancion(idCancion);
    });

    prevtBtn.addEventListener("click", ()=>{
        posicionTemaActual--;
        const idCancion = listaTemas [posicionTemaActual].id;
        cargarCancion(idCancion);
    });

