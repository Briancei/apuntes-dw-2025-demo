
document.addEventListener('DOMContentLoaded', function () {
    const contenido = document.querySelector(".content"); //imagen                      
    const imgGrande = document.querySelector(".grande"); //imagen agrandada           
    const cerrarBoton = imgGrande.querySelector(".cerrarButton"); //botón de cerrar     //--> optimización: etiqueta hija con contenedor.querySelector 




//al hacer click la imagen se muestra                                                   //<-- optimización: sintetizamos usando la función Handler 

const contenidoHandler = () => imgGrande.style.display = "flex";
item.addEventListener ("click", contenidoHandler);


//También valdría sintetizando solo la función arrow: 
//contenido.addEventListener("click", () => imgGrande.style.display = "flex");          //--> optimización: función arrow sintetizada quitando {}



    
//cuando hago click sobre el botón ".cerrarButton" la imagen grande desaparece (none)
    cerrarBoton.addEventListener("click", () => imgGrande.style.display = "none");      //--> optimización: función arrow sintetizada quitando {}
});
