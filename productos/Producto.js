class Producto {
    constructor(nombre, precio, categoria) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
    }
  
    clonar() {
      return new Producto(this.nombre, this.precio, this.categoria);
    }
  
    describir() {
      return `${this.nombre} - $${this.precio} (Categoría: ${this.categoria})`;
    }
  }
  
  module.exports = Producto;
  