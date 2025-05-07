
const miArreglo =[1,2,"jiji", true]; 
//metodos de arreglos
//length -> longitud del arreglo

const longitud = miArreglo.length;
console.log(longitud);

//push(valor) -> agrega un elemento final
// equivalente al append de python
miArreglo.push('Lupu')
console.log("cadena", miArreglo)

//pop() elimina el ultimo elemento de un arreglo
//si queremos lo podemos guardar en una variable
const ultimo = miArreglo.pop();
console.log("ultimo", ultimo);

 //shift() elimina el primer valor de un arreglo,
 //tambien lo guarda
 const primero = miArreglo.shift();
 console.log(miArreglo);

 //unshift(valor) Agrega un elemento al principio del arreglo
 miArreglo.unshift("Mary");
 console.log(miArreglo);

 //forEach
 //SOLO RECORRE, no guarda los valores en ningun lado
 miArreglo.forEach((item, index, arregloEntero) => {
    console.log(
        "index",
        index,
        "elemento",
        item,
        "arreglo Completo",
        arregloEntero
    );
 })

 //map recorre el arreglo, lo modifica con una funcion
 // y nos devuelve uno nuevo
 const nuevoArreglo = arreglo.map((item, index) => {
    const num = 2
    return(item += num);

 })

 console.log("Nuevo arreglo", nuevoArreglo);

 //filter Crea un nuevo array a partir de los elementos que
 // cumplan la condicion

 const arregloNum = [2, 4, 5, 6]
 const pares = arregloNum.filter((item) => item % 2 === 0);
 console.log(pares);
