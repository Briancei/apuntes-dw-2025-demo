# Transitions CSS
 - Es una forma de cambiar los valores de una o más propiedades de manera suave y gradual.
 - Se pueden aplicar transiciones a cualquier propiedad que acepte valores númericos rgb(255,255,525) o de color.
 Por ej: width, height, padding, color, background-color, opacity, etc.

 # Propiedades de color:
 - background-color: 
 - color:
 - border-color:
 - box-shadow:


 # Propiedades númericas:
 - font-size
 - margin
 - border-width
 - transform (prop como: scale, rotate, translate, etc..)

 # Como se describen las transiciones.
 - Utilizamos la prop `transition` y se puede personalizar de la siguiente manera:
 - `transition-property`: nos indica la propiedad a animar.
 - `transition-duration`: duración de la animación (en seg).
 - `transition-timing-function`: La manera o la forma en que se va a llevar a cabo la animación.
 - `transition-delay`: Demora antes de iniciar la transición.

 ```css
    div {
    transition-property: font-size;
    transition-duration: 4s:
    transition-timing-function: east-in-out;
    transition-delay: 2s;

    /* Podeos unificar estas 4 reglas en 1*/
    /* prop duration timing-function delay*/
    transition: font-size 4s ease-in-out 2s;
    }
```
# Timing functions.
- `easy`: Velocidad lenta - rápida - lenta (por defecto)
- ``linear``: velocidad constante.
- `ease-in`: lento - rápida.
- `ease-out`: rápida- lenta.
- `ease-in-out`: lenta - rápida- lenta ( más brúsca)
- `cubic-bezier()`: Timing personalizado.