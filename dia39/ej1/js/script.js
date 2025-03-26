function ParallaxEffect(){
    const parallaxBg = document.querySelector('.parallax-bg');
    // Seleccionamos a nuestra mascota.
    const elementoFlotante = document.querySelector('parallax-elemento-flotante');

    window.addEventListener('scroll', ()=>{
        let scrollPos = window.scrollY;
        console.log(scrollPos);

        // Mover el fondo
        // Velocidad 0.3 significa que se mueve al 30% de la velocidad scroll
        parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;

        if(elementoFlotante){

            // Podemos aplicar múltiples movimientos, ej rotación
            let rotation = scrollPos * 0.5; // Una rotación pequeña
            // !importante! 'transform:translateY()' es mejor para el rendimineot que cambiar 'top'
            elementoFlotante.style.transform=`translateY(${scrollPos*0.6}px)
            rotate(${rotation}deg)`;
        }

    });
}
if(window.matchMedia('prefers-reduced-motion: reduce)').matches){
    // no aplicar efectos
    console.log("No aplicar parallax por decisión del usuario")
} else {
    // aplicar efectos de parallax
    console.log("Se aplica el parallax");
    ParallaxEffect();
}

