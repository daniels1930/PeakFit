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

searchBox.appendChild(input);
topHeader.appendChild(searchBox);

// Agrego la fila de arriba al header
header.appendChild(topHeader);

// Agrego el header a la pagina
app.appendChild(header);