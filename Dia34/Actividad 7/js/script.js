// const ListPages = document.querySelector(".tab-content");
// const Listbottom = document.querySelector(".nav-button");

// ListBottom.forEach((tab,id) => {
    // tab.addevenlistener("click", () => );
// });




//listaTabs.forEach((tab, id) => {
//    tab.addEventListener("click", () => {
        // Quitar la clase "active" de todos los bloques y tabs
//        listaBloques.forEach((bloque, id) => {
//            listaBloques[id].classList.remove("active");
//            listaTabs[id].classList.remove("active");
//        });

        // Agregar la clase "active" al bloque y tab que me interesa
//        listaBloques[id].classList.add("active");
//        listaTabs[id].classList.add("active");
//    });
//});


// -------------------------------------------------------------------

const containerBloques = document.querySelector(".container");
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");

listaButtons.forEach((button, id) => {

    button.addEventListener("click", () => {
        // Obtenemos el ID del Target que quiero mostrar!
        const target = button.getAttribute('data-tab');

        // Actualizar la visibilidad de los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove('active');
            // si el bloque es el que me interesa, agregar 'active'
            if (bloque.id == target) {
                bloque.classList.add("active");
            }
        });

        // Actualizar el botón activo de navegación
        listaButtons.forEach( btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});


const canciones = [
    {id: 1, titulo: "Canción 1", artista: "Artista 1", imagen: "/.img.jpg", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    {id: 2, titulo: "Canción 2", artista: "Artista 2", imagen: "https://picsum.photos/id/235/200/300", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    {id: 3, titulo: "Canción 3", artista: "Artista 3", imagen: "https://picsum.photos/id/235/200/300", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    {id: 4, titulo: "Canción 4", artista: "Artista 4", imagen: "https://picsum.photos/id/235/200/300", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    {id: 5, titulo: "Canción 5", artista: "Artista 5", imagen: "https://picsum.photos/id/235/200/300", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];