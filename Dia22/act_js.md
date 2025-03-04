## Ejercicio 1: Creación y acceso a arrays

- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
- Imprime en la consola el primer elemento del array frutas.
- Cambia el segundo elemento del array frutas a "Mango".
- Imprime en la consola el array completo para verificar el cambio.
 ```js

    const frutas = ["Manzana" , "Banana" , "Naranja"];

    console.log( frutas[0]);

    frutas[1] = "Mango";

    console.log(frutas);
    frutas.log(frutas.lenght);

 ```


## Ejercicio 2: Creación y acceso a objetos

- Crea un objeto llamado persona con las propiedades nombre (string), edad (número) y ciudad (string).
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.

```js

const persona = {nombre: "julio", edad: "57", ciudad: "Murcia"};

console.log(persona.nombre);

persona.edad = 30;

console.log(persona)



```



## Ejercicio 3: Arrays de objetos

- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

```js
const alumno1 = {
   nombre: "petalo",
   nota:70,
};

const alumno2 = {
   nombre: "burbuja", 
   nota:80,
};

const alumno3 = {
   nombre: "cactus",
   nota:90,
};

consol.log(alumno2.nombre)


const estudiantes = [ alumno1 , alumno2 , alumno3];

alumno1.nota = 95;

// Utilizamos un bucle 'for', que es para repetir cosas de un bloque.

// 'i' es una variable que representa la posición del array. En este caso estamos diciendo: 'Con la posición inicial en uno, y mientras que la posición de los elementos sea mayor que i, vas a repetir esta acción tres veces. Como hemos dicho que i es menor que el valor máximo de elementos en el array (i < estudiantes.lenght), i nunca puese ser mayor que la posición 2 (acuerdate de que la posición 1 empieza en 0). Al llegar a la posición 3 (que no la hay); "i(3)< 3" es falso, y por eso se detiene el bucle.

// El valor máximo de i en cada vuelta lo espablecemos con i++ de forma que, en cada vuelta del bucle, i vale 1 mas hasta llegar a 2. Y el bucle se detiene por lo que he dicho antes.


for (
   let i = 0 ; 
   i < estudiantes.lenght;
   i++)
   {
      console.log = (
         "nombre: " + estudiantes[i].nombre + "nota:" + estudiantes[i].nota
      );};

// Ahora imprimimos los nombres y las notas de los estudiantes.
// Estamos diciendo: "Vas a imprimir el nombre del estudiante poniendo `nombre:` al principio. Después de eso vas a imprimir el nombre del estudiante con valor i conforme el bucle se ejecute, y por útimo vas a hacer lo mismo con las notas de los pobres estudiantes."
// El + se utiliza para `concatenar` cadenas de texto. Por eso lo ponemos.

```

## Ejercicio 4: Métodos en objetos

- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.

```js
 const calculadora = {
   a: 5,
   b: 3,
   sumar: function() {
      console.log(this.a + this.b);
   }
 }

console.log(calculadora.a);



const listaEstudiantes = [
  { nombre: "petalo", nota:70 },
  { nombre: "burbuja", nota:80 },
  { nombre: "cactus", nota:90 }
];

console.log(listaEstudiantes[1].nombre)


const calculadora = {
  a: 5,
  b: 3,
  sumar: function() {
     console.log(this.a + this.b);
  }
}

console.log(calculadora.a);
console.log(calculadora.b);
calculadora.sumar();

calculadora.a = 15;
calculadora.b = 30;
calculadora.sumar();


```