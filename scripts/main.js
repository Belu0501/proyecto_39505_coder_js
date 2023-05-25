class ProductoL {
  constructor(id, nombre, precio, stock, descripcion, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock = stock;
    this.img = img;
  }
}

const productos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("contenedorCarrito");

const cargarProductos = (productosjson) => {
  productosjson.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute("class", "Item");
    card.innerHTML = `
      <img alt=${e.nombre} src='${e.img}'/>
      <h4>${e.nombre}</h4>
      <p>${e.descripcion}</p>
      <h3>$${e.precio}</h3>
      <button type="button" class='botonAgregarCarrito' id='${e.id}' style='color: white;background-color: #223137;border-radius: 10px;'>Agregar al carrito</button>
    `;
    productos.appendChild(card);
  });

  // Agrego eventos a los botones de "Agregar al Carrito"
  const botones = document.getElementsByClassName("botonAgregarCarrito");
  for (let btn of botones) {
    btn.addEventListener('click', () => agregarAlCarrito(btn.id));
  }
};

const agregarAlCarrito = (id) => {
  const itemCarrito = productosjson.find((i) => i.id == id);
  if (itemCarrito) {
    const itemExistente = carrito.find((item) => item.id === itemCarrito.id);
    if (itemExistente) {
      itemExistente.cantidad++;
      itemExistente.total = itemExistente.precio * itemExistente.cantidad;
    } else {
      const itemNuevo = {
        ...itemCarrito,
        cantidad: 1,
        total: itemCarrito.precio,
      };
      carrito.push(itemNuevo);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
      title: 'Perfecto!',
      text: 'Producto agregado con éxito!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

const carritoVacio = () => {
  contenedorCarrito.innerHTML = "";
  let cartel = document.createElement("h2");
  cartel.innerHTML = "No hay productos en el carrito";
  contenedorCarrito.appendChild(cartel);
};

const itemsEnCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((e) => {
    const { nombre, cantidad, total } = e;
    let itemCarrito = document.createElement("div");
    itemCarrito.innerHTML = `
      <h3>${nombre}</h3>
      <h4>Cantidad: ${cantidad}</h4>
      <h4>$${total}</h4>
    `;
    contenedorCarrito.appendChild(itemCarrito);
  });
};

const verCarrito = () => (carrito.length ? itemsEnCarrito() : carritoVacio());

const orden = () => {
  let mensaje = "";
  carrito.forEach((e) => {
    const { cantidad, nombre, total } = e;
    mensaje += `<p>(x${cantidad}) - ${nombre} - $${total}</p>`;
  });
  return mensaje;
};

const total = () => carrito.reduce((acc, val) => acc + val.total, 0);

const funcionFinalizarCompra = () => {
  if (carrito.length) {
    Swal.fire({
      title: 'Perfecto!💖',
      html: `Su orden:<br>${orden()}Ha sido generada con éxito.<br><br>Precio total de su orden: $${total()}`,
      icon: 'success',
      confirmButtonText: 'Listo'
    });

    // Reiniciar el carrito
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));

    verCarrito();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error 😢',
      text: 'No hay productos en el carrito',
      showConfirmButton: false,
      timer: 2500,
    });
  }
};

let productosjson = [];

//Uso de Fetch desde una ruta relativa
fetch("./data/posts.json")
  .then((response) => response.json())
  .then((data) => {
    productosjson = data;
    cargarProductos(productosjson);
  })
  .catch((error) => console.log("Error:", error));

  // Array para el carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agrego eventos al botón "Ver carrito"
const btnVerCarrito = document.getElementById("verCarrito");
btnVerCarrito.addEventListener('click', () => verCarrito());

// Agrego eventos al botón "Finalizar compra"
const finalizarCompra = document.getElementById("finalizarCompra");
finalizarCompra.addEventListener('click', () => funcionFinalizarCompra());
