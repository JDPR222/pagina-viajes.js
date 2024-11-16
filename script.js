import {  barcelona,roma,paris,londres } from './ciudades.js';

//obtener los elemewntos del DOM
let enlaces = document.querySelectorAll('a') // seleccionamos todos las etiquetas a
let tituloElemento  = document.getElementById('titulo')  // seleccionamos los elementos de destino en el html
let subtituloElemento = document.getElementById('subtitulo')  // seleccionamos los elementos de destino en el html
let parrafoElemento = document.getElementById('parrafo')  // seleccionamos los elementos de destino en el html

console.log(enlaces)
//itera los 4 enlaces
enlaces.forEach( function(enlace){

    // si le hacemos click a uno de los enlaces va a ser el this

// por cada enlace escucha el evento de click el segundo parametro es una funcion
    enlace.addEventListener('click', function () {
        //se remueven primero la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active') 
        });
        // agregar el active al que corresponda
        this.classList.add('active') //this hace referencia al elemento que se esta trabajando por parametro (enlace)

        // traer la informacion del objeto correspondiente ejecutando la funcion obtenerInfo
        let contenido = obtenerInfo(this.textContent)  //enlace.textcontent o innertext
        // mostrar en el contenido dom
        tituloElemento.innerHTML = contenido.titulo // este contenido.titulo lo trae del objeto ciudades
        subtituloElemento.innerHTML = contenido.subtitulo // este contenido.subtitulo lo trae del objeto ciudades
        parrafoElemento.innerHTML = contenido.parrafo // este contenido.parrafo lo trae del objeto ciudades
        });
});


// funcion para taer la info de ciudades
function obtenerInfo (enlace){ 
    let contenido = {
        'Barcelona': barcelona, // aqui tenemos los textos del html
        'Roma':roma,
        'París': paris,
        'Londres': londres
    };
    console.log(contenido[enlace]);
    return(contenido[enlace]); //devuelve todoel objeto importado al cual se le hizo click
}
console.log(enlaces)
