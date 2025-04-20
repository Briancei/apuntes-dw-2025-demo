# Día 8

## Formularios

- Los formularios utilizan las etiquetas envolventes de <form>
- Utilizamos etiquetas <input> para ingresar datos. Algunos tipo (`type`) de ellos eran : radio, checkbox, text, email, password, submit.
- Todos los atributos REQUIEREN el atributo `name` para enviar la información, Este debe ser único, excepto con los <input> type="radio".
- Utilizamos otras etiquetas para algunos tips datos, por ej: <textarea>, <select> + <option>
- Los inputs suelen estar acompañados de un <label> como descripción.


## Métodos de GET y POST para enviar información.
- GET es visible en la URL, y POST utiliza el cuerpo de la petición. ()
- GET tiene un limite de 2048 caracteres y POST no (se utiliza para enviar información de mayor tamaño, incluyendo el upload de archivos.)
- Normarlmente GET se utiliza para obtener información y POST para enviarla.



Ejemplos de formularios con GET:
- Buscadores 
-   
-   

Ejemplos de formulario con POST:
 - Formulario de contacto.
 - Formulario de login/Registro.
 - Formulario de pago.
 

 Hacer un `login-form.html` sin estilos enviando la información al atributo action="#" y Método
 Utilicen "label" y que el usuario y clave sean obligatorios.

 <form action="./" metod="GET">
 </form>



