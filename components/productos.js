// productos.js - Jeronimo Escobar

fetch("../productos.json")
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML += crearSeccion(data);
  });

function crearSeccion(productos) {
  return `
  <section class="productos">

    <h2 class="titulo">Top sports sellers</h2>

    <div class="grid">
      ${crearCards(productos.slice(0, 4))}
    </div>

    <p class="view-all">View all</p>

    <div class="grid">
      ${crearCards(productos.slice(4, 8))}
    </div>

    <p class="view-all">View all</p>

    <div class="banner">
      BUY. SELL. TRAIN. GROW.
    </div>

    <div class="hero">
      <img src="../img/onepeak.png" alt="">
      <div class="hero-text">
      </div>
    </div>

  </section>
  `;
}

function crearCards(lista) {
  return lista.map(p => `
    <div class="card">
      
      <div class="img-container">
        <img class="img1" src="../${p.img1}" alt="">
        <img class="img2" src="../${p.img2}" alt="">
      </div>

      <div class="info">
        <p class="nombre">${p.nombre}</p>
        <p class="precio">${p.precio}</p>
      </div>

      <div class="icono">
        <img src="../img/shop_button.png" alt="">
      </div>

    </div>
  `).join("");
}