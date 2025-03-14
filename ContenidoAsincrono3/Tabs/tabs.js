

const titulos = document.querySelectorAll('.title');                    
const informaciones = document.querySelectorAll('.info');               

titulos.forEach(title => {

    title.addEventListener("click", () => {
       
       const goId = title.getAttribute("data-info"); //va al target 
       

         // <-- optimización: optimización de condicional con &&  
        informaciones.forEach(info => {
        goId = true

        if (goId){
            goId && info.classList.add("active") //para que se muestre
        } else {info.classList.remove("active")  //para que no se muestre 

        }

        //Otra manera de hacer el condicional también válida 
           /*  if (info.id === goId) {
                info.classList.add("active");
            } else {
                info.classList.remove("active");
            } */
        });

        

        //for each para quitar y añadir el sombreado
        titulos.forEach(title =>
            title.classList.remove("sombreado"));

        title.classList.add("sombreado");

    });

});