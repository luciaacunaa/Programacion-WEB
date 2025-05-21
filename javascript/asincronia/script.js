const button = document.getElementById("Botón");
let contador = 0;


// setTimeout

// Es una función que recibe por parámetros dos valores.
// Recibe una función y el tiempo que va a tardar ejecutandose.
button.addEventListener('click', ()=> {
   setTimeout(function(){
    alert("Hola, fui clickeado hace 2 segundos");
},2000) // Milisegundos 
    setInterval(() => {
    contador ++
    console.log(contador);
}, 1000)
});

// setInterval()
// Ejecutar el código cada "x" cantidad de tiempo

// Asincronia
// Petición a una api
// Métodos: get, post, put, delete

//fetch
fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((response) => console.log("response", response));

// Async await
// Función flecha asincrona
const asynFuction = async() => {
    //try catch
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character/2')
        const data = await response.json();
        
    }catch(error){
        console.log("error", error);
    }

};
asynFuction();//PAra ejecutar una función debemos llamarla y poner parentesis y ; al fina.

// Función regular asincrona
async function asynFunc() {

}