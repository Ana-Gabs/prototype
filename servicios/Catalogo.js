class Catalogo {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    clonarProducto(indice) {
      if (this.productos[indice]) {
        const clon = this.productos[indice].clonar();
        this.productos.push(clon);
        return clon;
      } else {
        throw new Error("Índice fuera de rango. No se pudo clonar el producto.");
      }
    }
  
    listarProductos() {
      return this.productos.map((producto, indice) => `(${indice}) ${producto.describir()}`).join("\n");
    }
  }
  
  module.exports = Catalogo;
  