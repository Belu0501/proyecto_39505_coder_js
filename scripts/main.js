
localStorage.setItem('productos', JSON.stringify( productosLista ) );

let productosjson = JSON.parse( localStorage.getItem( 'productos' ) );

for (const producto of productosjson) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3>  Producto: ${producto.nombre}</h3>
                            <b> $ ${producto.precio}</b>
                            <p> ${producto.descripcion}</p>
                            <button type="button" id="btn${producto.id}" class="btn btn-primary" 
                            style='color: white;background-color: #223137;border-radius: 10px;'>
                            agregar al carrito
                        </button>`;
    document.body.appendChild(contenedor);
}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var btnComprar1 = document.getElementById('btn1')
var btnComprar2 = document.getElementById('btn2')
var btnComprar3 = document.getElementById('btn3')
var btnComprar4 = document.getElementById('btn4')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (btnComprar1) {
    btnComprar1.addEventListener('click', function () {
    alert('Genial, agregaste este producto a tu carrito!', 'success')
  })
}
if (btnComprar2) {
    btnComprar2.addEventListener('click', function () {
    alert('Genial, agregaste este producto a tu carrito!', 'success')
  })
}
if (btnComprar3) {
    btnComprar3.addEventListener('click', function () {
    alert('Genial, agregaste este producto a tu carrito!', 'success')
  })
}
if (btnComprar4) {
    btnComprar4.addEventListener('click', function () {
    alert('Genial, agregaste este producto a tu carrito!', 'success')
  })
}


let tabla = document.createElement("div");
tabla.innerHTML = `
  <div class="container">
      <div class"col-12">
              <table class="table caption-top">
              <thead>
                  <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody id="carrito">
              </tbody >
              </table>           
      </div>
  </div>
  `;
document.body.appendChild(tabla);




