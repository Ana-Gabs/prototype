## Proyecto de Productos con Prototipo en Node.js
Este proyecto implementa el **patrn de diseño Prototype** en Node.js, que permite la clonación de objetos para crear copias exactas sin depender de las clases concretas. Se simula una tienda online en la que los productos se pueden clonar y personalizar.

## Estructura del Proyecto

│   index.js               # Punto de entrada de la aplicacion
│   package-lock.json      # Archivo de dependencias
│   package.json           # Archivo de dependencias
│   README.md              # Documentación del proyecto
│
├───productos
│       Camisa.js          # Clase para camisas, hereda de Producto
│       Pantalon.js        # Clase para pantalones, hereda de Producto
│       Producto.js        # Clase base para productos
│
└───servicios
        Catalogo.js        # Clase para gestionar y clonar productos
        Configuracion.js   # Implementación del patrón Singleton


## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flijo de ejecución
Productos originales:
(0) Camisa Polo - $25.99 (Categoría: Ropa) - Talla: M, Color: Azul
(1) Pantalón Jeans - $45.99 (Categoría: Ropa) - Talla: L, Material: Denim

Productos después de clonar:
(0) Camisa Polo - $25.99 (Categoría: Ropa) - Talla: M, Color: Azul
(1) Pantalón Jeans - $45.99 (Categoría: Ropa) - Talla: L, Material: Denim
(2) Camisa Polo - $25.99 (Categoría: Ropa) - Talla: M, Color: Rojo
(3) Pantalón Jeans - $40 (Categoría: Ropa) - Talla: L, Material: Denim


## Clases principales y métodos
1. Clase Producto (productos/Producto.js) --> Clase base para representar un producto.
**Metodos principales**
    1. clonar(): Clona el objeto actual y devuelve una nueva instancia del producto.
    2. describir(): Devuelve una descripcion del producto, incluyendo su nombre, precio y categoria.

2. Clase Camisa (productos/Camisa.js) --> Clase que representa un producto específico: una camisa.
**Metodos principales**
    1. clonar(): Clona el objeto Camisa y devuelve una nueva instancia.
    2. describir(): Devuelve la descripción de la camisa, incluyendo su talla y color.
3. Clase Pantalon (productos/Pantalon.js) --> clase que representa un producto especifico: un pantalón.
**Metodos principales**
    1. clonar(): Clona el objeto Pantalon y devuelve una nueva instancia.
    2. describir(): Devuelve la descripcion del pantalón, incluyendo su talla y material.

4. Clase Catalogo (servicios/Catalogo.js) --> Clase para gestionar un catalogo de productos y permitir la clonacion de los mismos.
**Metodos principales** 
    1. agregarProducto(producto): Agrega un producto al catálogo.
    2. clonarProducto(indice): Clona un producto del catálogo dado su índice.
    3. listarProductos(): Lista todos los productos del catálogo.


## Implentación de Prototype
El patron Prototype permite crear nuevas instancias de objetos basados en un prototipo existente, sin necesidad de saber la clase concreta del objeto que se esta clonando. Esto se logra implementando el metodo clonar en las clases que queremos que puedan ser clonadas.
En este proyecto, las clases Producto, Camisa y Pantalon implementan el metodo clonar(), lo que permite que se creen copias exactas de estos productos.
Primero se crean productos (camisas y pantalones) y se agregan a un catálogo. Luego, los productos son clonados usando el metodo clonar() en la clase Catalogo. Además se puede modificar cualquier propiedad del producto clonado, como el color o el precio, sin afectar el producto original.