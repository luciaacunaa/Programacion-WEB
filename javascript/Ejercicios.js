 //07-05
 //Ejercicio Tienda de Productos
const inventario = [];

const producto_uno = {Nombre: "Jabón", Precio: 2000, Categoria: "Perfumería"}
const producto_dos = {Nombre: "Fernet", Precio: 12000, Categoria: "Bebidas"}
const producto_tres = {Nombre: "Auriculares", Precio: 15000, Categoria: "Electrónica"}
const producto_cuatro = {Nombre: "Chocolate", Precio: 5000, Categoria: "Golosinas"}
 
inventario.push(producto_uno, producto_dos, producto_tres, producto_cuatro)

inventario.forEach((item) => {
    console.log("Producto:", item);
});

