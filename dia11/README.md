# Que es una Media query (MQ)


- Declaraciones en CSS que nos permite definir que reglas aplicar a partir de unas reglas asignadas por nosotros.

# Sintaxis de una MQ

Una media query se compone de las sisguientes partes:
- Un @media la cual es una palabra reservada [keyboard]
- Un tipo de media (screen, print, all, speech) [Mediatype]
- Operadores (ant, not, only)[Operators]
- Breakpoints es una condición, tiene que cumplir algo(max-widht, min-width, etc)
- Un bloque de CSS (nuestras reglas CSS)


```css
/*  keyword Mediatype   Operador/es     (breakpoint) */
/* @media screen      and      (breakpoint) { } */


/* Elegir not o only/ and/or */

@media not/only screen and/or (min-width: 600px){

    body {
        background-color: lightblue;
    }
    h1 {
        color:red;
    }

}

/*Combinar breakpoint (pantalla entre 600 y 800px*/
@media screen and (min-width:60px) and (max-width:800px){
    body {background-color: lightblue}

}

/* Cuando la pantalla esta horizontal(landscape) (vertical seria portrait)*/

@media screen and (orientation: landscape){

}

/* Modo oscuro*/

@media screen and (prefers-color-schema:dark){
    body {
        background-color: lightblue;
        color:white
    }
    
}

 ```

# Media types (screen/print)

- all: todos los dispositivos.
- print: material de vista previa de impresión.
- screen: pantallas a color (tablets, movil, ordenador)
- speech: dispositivos de conversión de texto a voz.

- Otros: pueden aparecer types DESPRECIATED tv, handheld, speech, braille, etc.. (no van mas apartir de css3)


Ejemplo de impresión: 
```css

@media print {
    .no-print {
        display:none !important;
    }
}

```

## Tips para utilizarlos:

- Sobrescriben las reglas de CSS normales, pero no posee una mayor especificidad por lo tanto las media queries deben estar por debajo de las reglas que quiera remplazar.
- Deben tener el mismo selector para que reemplace la regla que deseamos. Como excepción podemos utilizar las reglas principales en vez de específicar (background para reemplazar background-color).
- Pensar bien los breakpoints
- Podemos utilizar un @media para cada selector, o una sola para todos los selectores (recomendada)


## Mobile Firts!!!!
Intentamos desarrollar siempre primero para el movil, y luego para pantallas mas grandes. De esta manera nos aseguramos de que se vea bien el dispositivo móviles. (inpeccionar en web y pulsar icono pc,mv).

- Mobile (55%): 320px - 480px
- Tablets (24): 768px - 1024px
- Desktop (43%): 1024px - 1920px

```css

/* Mobile firts */

/* Tablet */
@media only screen and (min-width: 768px) {
    /* reglas para table*/
}

/*Deskotp*/

@media only screen and (min-width: 1024px) {
    /* reglas para desktop*/

}
```

## Ejemplo de Media queries en Imagenes(usando Picture)

```html 
<!--Para agrandar o hacer mas pequeña la foto depende el dispositivo movi, pc, table-->
<picture>
    <source media="(min-width:1024px)" srcset="./img/grande.jpg">
    <source media="(min-width:768px)" srcset="./img/mediana.jpg">
    <source media="(min-width:650px)" srcset="./img/pequenia.jpg">
<img src="./img/foto-pequenia.jpg>" alt="Mi Mascota"></picture>
```














