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
const logo = document.createElement("div"); // contenedor del logo
logo.classList.add("logo");

const logoImg = document.createElement("img");  // imagen del logo
logoImg.src = "assets/images/Header/Logo.png";
logoImg.alt = "logo";

logo.appendChild(logoImg);


// Buscador
const searchBox = document.createElement("div"); // contenedor del buscador
searchBox.classList.add("search-box");

const input = document.createElement("input"); // input de texto
input.type = "text";
input.placeholder = "Search products and more.....";

const btnBuscar = document.createElement("button"); // botón de búsqueda

const lupaImg = document.createElement("img");
lupaImg.src = "assets/images/Header/Lupa.png";
lupaImg.alt = "buscar";
btnBuscar.appendChild(lupaImg);

searchBox.appendChild(input);
searchBox.appendChild(btnBuscar);


// Iconos
const icons = document.createElement("div");
icons.classList.add("icons");

const iconos = [ // array de iconos
    { src: "assets/images/Header/Carrito.png", alt: "carrito" },
    { src: "assets/images/Header/Favoritos.png", alt: "favoritos" },
    { src: "assets/images/Header/Campana.png", alt: "campana" }
];

iconos.forEach(icono => { // recorro cada icono
    const img = document.createElement("img"); // creo imagen
    img.src = icono.src; // asigno imagen
    img.alt = icono.alt; // asigno alt
    icons.appendChild(img); // lo agrego al contenedor
});

// agrego iconos e imagenes a la fila de arriba
topHeader.appendChild(logo);
topHeader.appendChild(searchBox);
topHeader.appendChild(icons);

// Fila de abajo
const bottomHeader = document.createElement("nav");
bottomHeader.classList.add("bottom-header");

// Links
const navLinks = document.createElement("div");
navLinks.classList.add("nav-links");

["Categories", "Offers", "Sell", "About Us", "Help/complaints"].forEach(texto => { // recorro links
    const a = document.createElement("a"); // creo link
    a.href = "#"; //Enlace vacio para probar diseño
    a.textContent = texto;
    navLinks.appendChild(a);
});

// Usuario
const userSection = document.createElement("div");
userSection.classList.add("user-section");

const userInfo = document.createElement("div");
userInfo.classList.add("user-info");

const userImg = document.createElement("img");
userImg.src = "assets/images/Header/Usuario.png";
userImg.alt = "usuario";

userInfo.appendChild(userImg);
userInfo.appendChild(document.createTextNode("Mateo"));

const myProducts = document.createElement("div"); //boton productos
myProducts.classList.add("my-products"); // clase productos
myProducts.textContent = "My products"; // texto botón

userSection.appendChild(userInfo); // sección usuario
userSection.appendChild(myProducts); // clase usuario

// Armo la fila de abajo
bottomHeader.appendChild(navLinks);
bottomHeader.appendChild(userSection);

// Armo el header completo y lo agrego a la pagina
header.appendChild(topHeader);
header.appendChild(bottomHeader);
app.appendChild(header);
