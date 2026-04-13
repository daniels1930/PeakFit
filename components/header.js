// header.js - Jisell Castro

// Div principal de la pagina
const app = document.getElementById("app");

// Creo el header
const header = document.createElement("header");
header.classList.add("header");

// Fila de arriba
const topHeader = document.createElement("div");
topHeader.classList.add("top-header");

// Logo
const logo = document.createElement("div");
logo.classList.add("logo");

const logoImg = document.createElement("img");
logoImg.src = "assets/images/Header/Logo.png";
logoImg.alt = "logo";

logo.appendChild(logoImg);
topHeader.appendChild(logo);

// Buscador
const searchBox = document.createElement("div");
searchBox.classList.add("search-box");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search products and more.....";

const btnBuscar = document.createElement("button");
const lupaImg = document.createElement("img");
lupaImg.src = "assets/images/Header/Lupa.png";
lupaImg.alt = "buscar";
btnBuscar.appendChild(lupaImg);

searchBox.appendChild(input);
searchBox.appendChild(btnBuscar);
topHeader.appendChild(searchBox);

// Iconos
const icons = document.createElement("div");
icons.classList.add("icons");

const carrito = document.createElement("img");
carrito.src = "assets/images/Header/Carrito.png";
carrito.alt = "carrito";

const favoritos = document.createElement("img");
favoritos.src = "assets/images/Header/Favoritos.png";
favoritos.alt = "favoritos";

icons.appendChild(carrito);
icons.appendChild(favoritos);
topHeader.appendChild(icons);

// Agrego la fila de arriba al header
header.appendChild(topHeader);

// Agrego el header a la pagina
app.appendChild(header);