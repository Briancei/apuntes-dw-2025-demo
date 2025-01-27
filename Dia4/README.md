# Día 4

## Selectores CSS
```css

/* selector de id (solo se puede utilizar un id)*/ 
#caja { 
    color: blue;
 }
/*selector de clase*/
.caja { color: red;
 }

 .cajaImportante {
    color: yellow;
 }
/* selector de etiqueta */
div {
    color: green;
  }
  /*Selector de múltiples items*/
  h1,h2,h3 p {
    color: red;
  }

  /* Selector con atributo*/
  img[alt="Foto 1"] {
    color: brown;

  }

  div[class*="test"] { /* el asterisco hace de comodin en la búsquera */
    background: salmon;
  }
/* Selector de hijos directos */
header nav > #logo > a {}
/* Selector de todos los descendientes */
header nav a {}

/* Selector de el siguiente hijo */
p + a {}
```


```html

<header>
    <nav>
        <h1 id="logo">
            <a href="./">Mi Página</a></h1>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./productos.html">Productos</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
        

        </ul>
        </nav>
</header>


<h2 class="tituloPrincipal">Título</h2>
<img src="./img/foto.png" alt="Foto 1" />
<img src="./img/foto.png" alt="Foto 2" />
<img src="./img/foto.png" alt="Foto 3" />
<div class="caja"> id="caja">soy un div</div>
<a href="https://x.com/miPerfil">Mi Perfil en X </a>
```

# Reset CSS

Buscamos que todos los navegadores (chrome, safari, brave, firefox) inicien nuestros proyectos con los mismos estilso, sin aplicar los propios.

Ejemplos de reset CSS:
[Meyer Web] https://meyerweb.com/eric/tools/css/reset/
[Eduardo fierro]https://raw.githubusercontent.com/eduardofierropro/Reset-CSS/refs/heads/main/css/app.css
[Top 10]https://cssauthor.com/css-reset-stylesheets/

Reset Minimo

```css
/*Reset Minimo */

/* el `*`incluye todos los elementos de mi web */ 
/* El border-box utiliza el borde de la caja como ancho, en vez del contenido */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

# Mini - actividad
1. Crear una pagina con 2 cajas que contenga parrafos y con la clase ".caja"
2. Agregar estilos a tus cajas para visualizar bordes, margenes y padding.
3. a la segunda caja, agregarle la clase ".alternativa"
4. a la clase alternativa, agregar el estilo box-sizin: border-box y comparar la diferencia.
5. Buscar en internet alguna hoja de reset, e implementarla en la web.
