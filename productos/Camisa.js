const Producto = require("./Producto");

class Camisa extends Producto {
  constructor(nombre, precio, categoria, talla, color) {
    super(nombre, precio, categoria);
    this.talla = talla;
    this.color = color;
  }

  clonar() {
    return new Camisa(this.nombre, this.precio, this.categoria, this.talla, this.color);
  }

  describir() {
    return `${super.describir()} - Talla: ${this.talla}, Color: ${this.color}`;
  }
}

module.exports = Camisa;
