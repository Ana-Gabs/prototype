const Camisa = require("./productos/Camisa");
const Pantalon = require("./productos/Pantalon");
const Catalogo = require("./servicios/Catalogo");

const catalogo = new Catalogo();

// crea y agregar productos originales
const camisa1 = new Camisa("Camisa Polo", 25.99, "Ropa", "M", "Azul");
const pantalon1 = new Pantalon("Pantalón Jeans", 45.99, "Ropa", "L", "Denim");

catalogo.agregarProducto(camisa1);
catalogo.agregarProducto(pantalon1);

console.log("Productos originales:");
console.log(catalogo.listarProductos());

// cona productos
const clonCamisa = catalogo.clonarProducto(0); //clona la camisa
clonCamisa.color = "Rojo"; // cabia color del clon

const clonPantalon = catalogo.clonarProducto(1); //clona pantalón
clonPantalon.precio = 40.00; // cambia precio del clon

console.log("\nProductos después de clonar:");
console.log(catalogo.listarProductos());
