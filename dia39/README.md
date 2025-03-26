# PARALLAX

Uso de parallax con CSS:

```css

.parallax{
    background-image: url('imagen.jpg');
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
```



Uso de parallax con JS:

```js
window.addEventListener('scroll', ()=>{
    //Mostrar cuánto he scrolleado
    console.log('Scroll Y:', window.scrollY);

});

```

## Prefers-reduce-motion media query

Los usuarios pueden activar en sus dispositivos la preferencia de reduce motion.
- Win: config->accesibilidad-> mostrar animaciones en windows
- Mac: Pref sistema -> Acessibilidad -> Mostrar -> Reducir movimientos
- iOs: Config -> accesibilidad -> movimineot -> reducir movimiento
- Androig : Config-> Accesibilidad -> Eliminar animaciones 

Para css usamos media queries
```css
@media (prefers-reduced-motion: reduce){
    .parallax {
        background-attachment:scroll;
    }
}


```

Para js usamos windows.matchMedia

```js
if(window.matchMedia('prefers-reduced-motion: reduce)').matches){
    // no aplicar efectos
} else {
    // aplicar efectos de parallax
}

```