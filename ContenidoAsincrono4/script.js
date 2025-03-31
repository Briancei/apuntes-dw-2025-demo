
// ponemos a funcionar al DOM
document.addEventListener('DOMContentLoaded', function () {

    //1. Declaramos variables 

    // Agarramos elementos: 
    //texto silla, imagen silla, texto mesa, imagen mesa 
    const txtSilla = document.querySelector('.txt-silla');
    const imgSilla = document.querySelector('.img-silla');
    const txtMesa = document.querySelector('.txt-mesa');
    const imgMesa = document.querySelector('.img-mesa');
    //botones del footer 
    const btnSilla = document.querySelector('.footerSilla');
    const btnMesa = document.querySelector('.footerMesa');

    //barritas de transición 
    const barritaSilla = document.querySelector('.barrita-silla');
    const barritaMesa = document.querySelector('.barrita-mesa');



// Mostrar solo la silla al cargar la página
imgSilla.classList.remove('oculto');
txtSilla.classList.remove('oculto');
btnSilla.classList.add('completa');
barritaSilla.classList.add('completa');


    // 2 . Funciones 

    //Cuando hago click sobre el botón de la silla
    btnSilla.addEventListener('click', function () {

         //SILLA: imagen y texto silla
         imgSilla.classList.remove('oculto');
         txtSilla.classList.remove('oculto');

         //SILLA: boton y barrita silla 
         btnSilla.classList.add('completa');
         barritaSilla.classList.add('completa');

         //MESA: imagen y texto mesa
         imgMesa.classList.add('oculto');
         txtMesa.classList.add('oculto');
        

         //MESA: boton y barrita mesa
        btnMesa.classList.remove('completa');
        barritaMesa.classList.remove('completa');
        
       
    });

    btnMesa.addEventListener('click', function () {
        //SILLA: imagen y texto 
        imgSilla.classList.add('oculto');
        txtSilla.classList.add('oculto');

        //SILLA:boton y barrita  
        btnSilla.classList.remove('completa');
        barritaSilla.classList.remove('completa');


        //MESA: imagen y texto 
      
        imgMesa.classList.remove('oculto');
        txtMesa.classList.remove('oculto');

       
        //MESA: boton y barrita 
        btnMesa.classList.add('completa');
        barritaMesa.classList.add('completa');

       
        
    });

    ;
    // Función para manejar el scroll
    function hacerScroll() {
        // Obtener la posición del scroll vertical
        const posicionScroll = window.scrollY;

        // Altura del contenedor de texto
        
        const alturaMesa = btnMesa.offsetTop;

        // Determinar cuándo cambiar de elementos visibles
        if (posicionScroll > alturaMesa) {
            
            
            //SILLA: imagen y texto 
            imgSilla.classList.add('oculto');
            txtSilla.classList.add('oculto');

            //SILLA:boton y barrita  
            btnSilla.classList.remove('completa');
            barritaSilla.classList.remove('completa');
 

            //MESA: imagen y texto 
          
            imgMesa.classList.remove('oculto');
            txtMesa.classList.remove('oculto');

           
            //MESA: boton y barrita 
            btnMesa.classList.add('completa');
            barritaMesa.classList.add('completa');
           
        

        } else {
            

             //SILLA: imagen y texto silla
             imgSilla.classList.remove('oculto');
             txtSilla.classList.remove('oculto');

             //SILLA: boton y barrita silla 
             btnSilla.classList.add('completa');
             barritaSilla.classList.add('completa');
 
             //MESA: imagen y texto mesa
             imgMesa.classList.add('oculto');
             txtMesa.classList.add('oculto');
            

             //MESA: boton y barrita mesa
            btnMesa.classList.remove('completa');
            barritaMesa.classList.remove('completa');
        }
    }

    // Llamar a hacerScroll cuando se haga scroll en la página
    window.addEventListener('scroll', hacerScroll);

    // Llamar a hacerScroll al cargar la página para inicializar el estado
    hacerScroll();
    
});



