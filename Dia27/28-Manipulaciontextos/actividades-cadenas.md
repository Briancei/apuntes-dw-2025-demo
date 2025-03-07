#### Actividades Prácticas de Manipulación de Strings en el Contexto de Diseño Web (HTML)

**Nivel 1: Formateo Básico de Texto**

1.  **Mayúsculas y Minúsculas en Títulos:**

    *   Pide al alumno que cree un archivo HTML con un título (`<h1>`) que contenga texto en minúsculas.
    *   Usando JavaScript, seleccionar el elemento `h1` y transformar el texto a mayúsculas utilizando `.toUpperCase()`. Mostrar el resultado en un div nuevo.
    *   Repetir el ejercicio, pero transformando el texto a minúsculas con `.toLowerCase()`.

2.  **Extracción de Iniciales:**

    *   Solicitar al alumno que cree un párrafo (`<p>`) con el nombre completo de una persona (ej: "Juan Pérez").
    *   Mediante JavaScript, extraer las iniciales del nombre y apellido utilizando `.split()` y `.slice()`.
    *   Mostrar las iniciales en un elemento `span` dentro del mismo párrafo.

3.  **Reemplazo de Palabras en un Input:**

    *   Crear un input (`<input>`) con un texto predefinido que contenga una frase que se desee cambiar.
    *   Utilizar `.replaceAll()` para buscar la palabra "TuMarca" y cambiarla por el mismo valor pero entre tags de <span> con una clase para resaltarla. 
    *   Imprimir el resultado en un div con el texto corregido.

**Nivel 2: Validación y Limpieza de Datos de Formulario**

1.  **Eliminación de Espacios en Nombres de Usuario:**

    *   Crear un formulario HTML con un campo de entrada (`<input type="text">`) para el nombre de usuario.
    *   Al enviar el formulario, utilizar `.trim()` para eliminar los espacios en blanco al inicio y al final del nombre de usuario ingresado.
    *   Mostrar el nombre de usuario "limpio" en un elemento HTML (ej: un `<span>`) debajo del campo de entrada.
2.  **Verificación de URL:**

    *   Crear un campo de entrada (`<input type="url">`) para que el usuario ingrese una URL.
    *   Utilizar `.startsWith()` para verificar si la URL comienza con "http://" o "https://". Si no es así, agregar "https://" al inicio de la URL.
    *   Mostrar la URL validada en un elemento HTML.

3.  **Filtrado de Comentarios:** (Este aun no.)

    *   Crear un área de texto (`<textarea>`) para que los usuarios ingresen comentarios.
    *   Utilizar `.includes()` para detectar palabras ofensivas o no deseadas dentro del comentario.
    *   Reemplazar las palabras ofensivas con asteriscos ("\*") utilizando `.replace()` y mostrar el comentario filtrado en un elemento HTML.

**Nivel 3: Manipulación Avanzada de Texto para Diseño Dinámico**

1.  **Creación de Resumen de Artículos:**

    *   Simular un artículo largo en un elemento `div`.
    *   Utilizar `.slice()` para extraer los primeros 100 caracteres del artículo y crear un resumen.
    *   Agregar un enlace "Leer más..." que muestre el artículo completo al hacer clic.

2.  **Generación de Etiquetas (Tags) a partir de un Texto:**

    *   Crear un campo de entrada para que el usuario ingrese una lista de palabras clave separadas por comas.
    *   Utilizar `.split()` para convertir la cadena de palabras clave en un array.
    *   Crear dinámicamente elementos `span` con cada palabra clave como texto y agregarlos a un contenedor HTML.
    
3.  **Animación de Texto con Repetición:**

    *   Crear un elemento `h1` con un texto corto.
    *   Utilizar `.repeat()` para repetir el texto varias veces y crear un efecto de "marquee" o "ticker" horizontal utilizando CSS y JavaScript.

