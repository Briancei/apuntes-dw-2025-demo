# Día 9

# Actividad.
Hacer un `login-form.html` sin estilos enviando la información al atributo action="#" y Método
 Utilicen "label" y que el usuario y clave sean obligatorios.

 <form action="./" metod="GET">
 </form>

 # Como buscar input obligatorio required Attribute

 - Investigar los siguientes types, explicar que hacen, y crear un ejemplo en `otros-inputs.html`.
 "number, color, date, file, reset, hidden, range"

Esto es solo para cuando tenemos un formulario que hace upload (carga) de archivos.
<form method="post" enctype="multipart/form-data">
 <input type="file">

 - Nuevas etiquetas/tipos: tel, url, search, time, week, month, datetime-local.

# Introducción a Nomenclaturas CSS Y BEM

Forma de nombrar nuestros CSS para mantener código limpio y ordenado. Buscamos código comprensible, predecible y fácil de leer.

## Nombres de variables/selectores/archivos

Texto común
- UPPERCASE: `MICLASEDEHTML`
- lowercase: `miclasehtml`
- Title Case: 
- camelCase: `miClaseDeHtml`
- PascalCase: `MiclaseDeHtml`
- kebab-case: `mi-clase-de-html` (se utiliza para nombrar archivos)
- snake_case: `mi_clase_de_html`

## Nomenclatura BEM (Block-element-Modifier)

- [BEM] (https://getbem.com/naming)

## Para que?
1. Comunicar un proposito o función.
2. Comunicar la estructura del componente.
3. Marca una expecificidad baja consistente en la estructura de la página.

[Specificity]


Su nombre es en "kebab-case" separando __ para elementos y -- para modificiadores.

Ejemplo:
.[bloque]__[elemento]--[modificador]

1.**Bloque**: El nombre del componente, el cual por si solo tiene sentido: card, header, container, button, footer, menu.
2. **Elemento**: Dentro de un bloque puede haber uno o mas elementos. Estas partes no tiene sentido por si solos: "menu item", "list iten", "checkbox label", 
3. **Modificador**: Una variación o estado diferente para un bloque o elemento.
Que cambia la apariencia o comportamiento del mismo. "xmas" disables, highlighted, checked, "size big", "color yellow". No olvidemos que si agregamos un modificador, la etiqueta debe tambien incluir el nombre del elemento o bloque.
ej: `<div class="footer footer-red </div>`

<style>
    .card {

    }

    .card__header{}
    .card__content{}
    .card__footer{}
    .card__footer:hover{}



    form input {}
    .form__input{}

    /*imagen de css specificity*/

    form input #item1 .card {
        color: red;
    }
    .form__input{
        color:blue;
    }

    .div{ 
        color:red;
    }



    </style>
<div class="Tarjeta">
<ul>
    <li class="li"></li>
    <ul>
</div>

## otro ejemplo

<div class="card">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Pie de la tarjeta</div>
    </div>

<div>

##

<h1 class="sidebar__tittle">Título<h1>
    
<ul class="sidebar__nav-list">
    <li class="sidebar__nav-list">
         <a  class="sidebar__link" href="#">Home<a>
    </li>
    <li>
        <a href="#">Contacto<a>
    </li>
    <li>
        <a href="#">Acerca de nosotros<a>
    </li>
    <ul>
</div>

##
<div>

<h1 class="sidebar__tittle">Título<h1>
    
<ul class="lista">
    <li class="lista__item">
         <a  class="lista__link" href="#">Home<a>
    </li>
    <li class="lista__item">
        <a href="#">Contacto<a>
    </li>
    <li>
    <li class="lista__item">
        <a href="#">Acerca de nosotros<a>
    </li>
    <ul>
</div>

## Multiples tarjetas

<div class="card">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Pie de la tarjeta</div>
</div>

<div class="card card--navidad">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Pie de la tarjeta</div>
</div>

<div class="card"></div>
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Pie de la tarjeta</div>
</div>


    
    







 

