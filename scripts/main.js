let localidad = prompt("Si sos de San Justo, ingresa 1. Si sos de Ramos Mejia, ingresa 2. Si sos de Moron, ingresa 3. Si no perteneces a ninguna de estas zonas, ingresa 0.");
const localidadSANJUSTO = 1
const localidadRAMOSMEJIA = 2
const localidadMORON = 3
const localidadLEJANA = 0

if (localidad == localidadSANJUSTO) {
    alert("Buenísimo! Los envíos son sin costo a la localidad de San Justo :D");
} else if (localidad == localidadRAMOSMEJIA) {
    alert("Los envíos a la localidad de Ramos Mejia tienen un valor adicional de $150.");
} else if (localidad == localidadMORON) {
    alert("Los envíos a la localidad de Moron tienen un valor adicional de $250.");
} else if (localidad == localidadLEJANA) {
    alert("Lástima, por el momento no realizamos envíos por tu zona.");
}
else {
    alert("La respuesta ingresada no es válida.")
}

let numeroEnvios = 3;
for (let envio = 1; envio <= numeroEnvios; envio++) {
    let nombre = prompt("¿Cómo se llama la persona que realizó el pedido " + envio + "?");
    alert("Realizó el pedido " + nombre + ", tiene asignado el envío número " + envio);
    console.log("Realizó el pedido " + nombre + ", tiene asignado el envío número " + envio);
}

//Acá empieza lo que sumé para la Pre-Entrega nº2

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

let misProductos = [
    new Producto("Pampers Premium RN x36un", 2220),
    new Producto("Pampers Confort RN+ x36un", 1850),
    new Producto("Huggies Flex RN x34un", 1640),
    new Producto("Huggies Supreme RN x34un", 2310),
    new Producto("Babysec RN x20un", 1370)
];

function calcularCostoTotal(productos = []) {
    let total = 0;
    for (const unProducto of productos) {
        total += unProducto.precio;
    }
    return total;
}

let costoTotal = calcularCostoTotal(misProductos);

//Usando la función de orden superior MAP
let nombres = misProductos.map((unProducto) => unProducto.nombre);
alert("Lista de productos que compró el usuario: " + nombres);


alert("El usuario deberá abonar un total de $" + costoTotal.toFixed(2) + "por la compra de " + misProductos.length + " productos.");git 