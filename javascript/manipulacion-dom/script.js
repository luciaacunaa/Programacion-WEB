// Manipulacion del DOM
// Nos permite interactuar con un documento, modificar su estructura, estilo y contenido

//Seleccionar elementos del DOM 
//por ID
//Obteniendo por id la etiqueta titulo
//Nos permite acceder a todas sus propiedades
let titulo = document.getElementById('titulo'); 
console.log(titulo); //Muestra por consola
console.log(titulo.value, titulo.textContent, titulo.innerText);

titulo.textContent = "Este es el nuevo titulo";


//Eventos(addEventListener, onClick, OnChange);
let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
    alert('Este boton fue clickeado')
})
