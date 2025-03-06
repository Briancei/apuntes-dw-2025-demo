let frase="      No me gusta Javascript en diseño web       ";

//trim(), toUpperCase(), replace()
let resultado = frase.trim().toUppercase().replace("NO ME GUSTA", "ME ENCANTA");


 // ME ENCANTA JAVASCRIPT EN DISEÑO WEB. 


 // ESTO ES PARA RECORRER UNA LISTA
 const hobbies = ["Futbol", "Programar en JS", "Leer"];
 const cant = hobbies.length; //3 para contar los elementos de la lista.
 console.log(cant);3
 console.log(hobbies[0]); 'Futbol'

 for(let i=0; i< cant.length ; i++){

    const hobbie= hobbies[i];
    console.log(hobbie); 'Futbol', 'Programar en JS', 'leer'
    
}

let i=25;
for(let i=0; i< hobbies.length ; i++){

    const hobbie= hobbies[i]; // 1 hobbie
    console.log(hobbie); 'Futbol', 'Programar en JS', 'leer'
    
}

console.log(i); 25
console.log(hobbie);     