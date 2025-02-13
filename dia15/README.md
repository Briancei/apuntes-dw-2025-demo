# CSS GRID

- Grid es uyn sistema de maquetación bidimensional para crear interfaces y layouts tipo tablas.
- Se compone de filas y columnas, y se pueden anidar unos dentro de otros.
- Se pueden crear layouts complejos con muy pocas lineas de código.


- Nos sirve para crear layouts.
- No es opuesto a Flex, se pueden combinar entre ellos.
- Grid si sustituye a las <tables> para el armado de layouts.

Utilizamos `Display:grid` para crear un grid y `grid-template-columns` y `grid-template-rows` para definir el número de columnas y filas.

```css 

/* layout de 3 x 3 */

.container {
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}

```

Puede visualizar el layout de GRID desde la consola de chrome.

Podemos indicar a cada item, donde posicionarlo usando
``grid-row-start``, ``grid-row-end``, ``grid-column-start`` y ``grid-column-end``, teniendo en cuenta que las filas y columnas empiezan en 1 (no en 0)

Si queremos que ocupe 3 columnas y una fila, debemos indicar que comience en la col 1, y termine en la col 4. y que la fila comience en la 1 y termine en la 2.



```css
/*item de 3 cols en 1 fila*/
.item-1{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}
```
Se pueden invertir el start y el end y funcionará igual.

Se pueden utilizar valores negativos para seleccionar elementos desde el final del grid.


```css

.item-1{
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 1;
    grid-row-end: -1;
}
```

En vez de seleccionar la fila/columna de destino, podemos utilizar span para indicar cuantas filas o columns queremos que ocupe un item

```css
.item-1{
    grid-column-start: 1;
    grid-column-end: span 2; /*se amplia un bloque más*/
    grid-row-start: 1;
    grid-row-end: span 3; /* se amplía 2 bloques más*/
}
```

Para resumir grid-column-start y grid-column-end en una sola linea, podemos usar grid-column. Lo mismo con grid-row.
```css
.item-1{
    grid-column:2/3; /* col start / end*/
    grid-row:2/4;  /* row start/ end*/

}
```

Podemos utilizar una forma aún mas corta usando grid-area, donde definimos ``grid-row-start``, ``grid-column-start``, ``grid-row-end``, ``grid-column-end``
``
```css
.item-1{
    grid-area: 1/1/4/4;
    

}
```

Con grid es muy simple crear un elemento por encima de otro.

Podemos utilizar ``grid-gap`` para definir un espacio entre las columnas y filas.
El mismo soporta un valor para fila y columna, o 2 valores para diferenciarlos.

```css 

.container {
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px; /* Separacion entre filas y col*/
    grid-gap: 1em 3em;/* separacion independiente para filas y para columnas*/
}
    
```

    Existe la opción repeat () que nos permite repetir el numero de veces que quiero para una fila o columna.
    
```css
    .container {
    display:grid;
    grid-template-columns: repeat (3, 100px);
    grid-template-rows: repeat (3,100px);
    grid-gap: 10px;
}

 ```

 Si agregamos mas bloques dentro de nuestro grid, se intentará ubicarlo en la primera posición disponible, si no quedan posiciones libres, se creará una nueva fila.
 Estas nuevas celdas no tendrán el tamaño asignado en nuestro grid-template, y se llaman "grid-implicitas". Podemos usar `grid-auto-rows: 100px`
 para definir el tamaño de nuestras filas/s.

 ```css
    .container {
    display:grid;
    grid-template-columns: repeat (3, 100px);
    grid-template-rows: repeat (3,100px);
    grid-gap: 10px;
    grid-auto-rows: 100px;
}

 ```

 También existe el `grid-auto-flow` que nos permite definir si las nuevas celdan se crearán como filas.

```css
 .gridContainer {
        display:grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-gap: 1em;

        grid-auto-rows: 75px;
        grid-auto-flow: column;

    }
 ```

    Las unidades que podemos utilizar son px, %, em, rem, pero se le suma una nueva de valor fraccional, o ``fr``. Este valor nos permite fraccionar el tamaño disponible.

    Por ejemplo, si tenemos 3 columnas y definimos que la primera columna tenga un tamaño de 1fr, la segunda 2fr y la tercera de 1fr.
    Segunda columna ocupará el doble de espacion que las otras 2.

    ```css
    /*layout col del medio ocupa 2px */
 .gridContainer {
        display:grid;
        grid-template-columns: 1fr 2fr 3fr;
        grid-template-rows: 100px 100px 100px;
        grid-gap: 10px;

    }
 ```