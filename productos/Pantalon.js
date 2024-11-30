const Producto = require("./Producto");

class Pantalon extends Producto {
  constructor(nombre, precio, categoria, talla, material) {
    super(nombre, precio, categoria);
    this.talla = talla;
    this.material = material;
  }

  clonar() {
    return new Pantalon(this.nombre, this.precio, this.categoria, this.talla, this.material);
  }

  describir() {
    return `${super.describir()} - Talla: ${this.talla}, Material: ${this.material}`;
  }
}

module.exports = Pantalon;
