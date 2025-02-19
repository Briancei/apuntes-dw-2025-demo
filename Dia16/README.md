# BEM (Block, Element, Modificar)

# Suit CSS

- Block --> Componente.
- Element --> Elemento.
- Modifier --> Modificador.

Nuevos.
- Utilities.
- Estados (on/off ).

# Utilities:

- Se escribe con `u-utilityName` por ejm: `u-red`
- Se escribe con u- camelCase
- Se utiliza para aplicar un estilo a cualquier elemento.

```css
.u-red {
    background-color: red;
    color: white;
}

.u-big {
    font-size: 5rem;
}

.u-sm-text{
    /*texto pequeño*/
}

.u-md-text{
    /*texto mediano*/
}

.u-lg-text {
    /*texto grande*/
}
```

# Componente

- Igual al bloque de BEM, pero se escribe con PascalCase. Por ejm: `Header`, `MiBoton`, `SeccionHero`

# Elementos (Part, DescendentName)
 Igual que el elemento en BEM, pero se escribe con camelCase, por ejm: `Header-tittle`, `Card-imageFront`, `Tweet-bodyImage`, `Twwet-bodyText`.

 ```html
<article class="Tweet">
    <header class="Tweet-header">
    <img class="Tweet-header-img"  src="./img/mi-foto.png" alt="">
    ...
    </header>
    <div class="Tweet-bodyText">
    ...
    </div>
 ```

 # Modificadores.

 Al igual que en BEM, y se utiliza `Componente--nombreModificador` 
 
 ```html
 <button class="Button">Boton normal</button>
 <button class="Button Button--navidad">Boton normal</button>
 ```

 ## Estados

 Nuevo: Clases para elementos que marcan el estado de un componente/elemento. Se escribe con camelCase y usa la palabra `is-` delante.

 ```css
.Tweet {
    /*estilos de un tweet común*/
}
.Tweet.is-expanded{
    /* solo cambios para el tweet abierto */

}
 ```

 ```html
 <article class="Tweet">
 <article class="Tweet is-expanded">
    ...
</article>
```

