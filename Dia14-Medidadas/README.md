# Unidades de Medidas en CSS: px, %, em, rem.

## Pixel
- Son unidades absolutas que representan un punto en la pantalla, son ideales para tamaños y dimensiones precisos que no deben cambiar en relación con otros elementos. Es recomendable usarlo para bordes, img y otros elementos de dimensión fija.

## Porcentaje "%"

- Es una relativa al tamaño del elemento padre. Ej: el padre es de 200px y el elemento tiene witdh de 50%, el ancho del objeto será de 100px. Esta medidad es útil para diseños fluidos y responsive que se adapten al tamaño de pantalla. Es recomendable para contenedores que varien según su contenedor.

## EM "em" ( viene de el inglés de la letra M)

- La unidad "em" es relativa al tamaño de la fuente de el elemento padre (o el suyo). Por ej: si el padre tiene un `font-size: 10px;` y un `magin: 3 em;`el margen será de 30px. Esta unidad es útil para crear tamaños de texto y márgenes que escalen con el tamañao de la fuente.
Esto mejora la accesibilidad y flexibilidad del diseño.
Por defecto los navegadores asignan el font-size inicial a 16px.

```css
.card {
    font-size: 16px; /* 16px */
    padding: 1.5em; /* 24px */
}
```
## REM (root EM)
 - Es relativa al tamaño de la fuente de la RAIZ del documento (normalmente es <html>).
 Si el tamaño de la fuente del HTML es de 8px, y un elemento descendente en varios niveles tiene una medida de " 3rem" su medida será de: "24px;". Rem es útil para contener una escala consistente en todo el documento, independientemente de la estructura del DOM. Es recomendable usar rem para tamaños globales, como el tamaño de la fuente principal y los márgenes, para garantizar coherencia en todo el sitio.


 ```css
html {
    font-size: 16px;
}

.card {
    font-size: 2em; /* 32px */
}

.card__tittle {
    /* El rem ignora el font-size de .card */
    margin: 1rem; /*16 */
}
 ```