// hero.js - Daniels Arias

const app = document.getElementById("app")

const slides = [
  {
    titulo: "NEW <span>COLLECTIONS</span><br>BY TOP BRAND.",
    imagen: "./assets/images/hero-atleta-1.png"
  },
  {
    titulo: "PUSH YOUR <span>LIMITS</span><br>EVERY DAY.",
    imagen: "./assets/images/hero-atleta-2.png"
  },
  {
    titulo: "GEAR UP FOR<br><span>GREATNESS.</span>",
    imagen: "./assets/images/hero-atleta-3.png"
  }
]

let slideActivo = 0

// Banner superior
const topBanner = document.createElement("div")
topBanner.className = "hero-top-banner"
topBanner.textContent = "The Lab of Performance."
app.appendChild(topBanner)

// Sección hero
const hero = document.createElement("section")
hero.className = "hero"
app.appendChild(hero)

// Logo fondo
const bgLogo = document.createElement("img")
bgLogo.className = "hero-bg-logo"
bgLogo.src = "./assets/images/hero-bg.png"
hero.appendChild(bgLogo)

// Imagen atleta
const atleta = document.createElement("img")
atleta.className = "hero-atleta"
atleta.src = slides[0].imagen
hero.appendChild(atleta)

// Contenido texto
const contenido = document.createElement("div")
contenido.className = "hero-content"
hero.appendChild(contenido)

// Aspire to more
const aspire = document.createElement("p")
aspire.className = "hero-aspire"
aspire.textContent = "Aspire to more"
contenido.appendChild(aspire)

// Título
const titulo = document.createElement("h1")
titulo.className = "hero-titulo"
titulo.innerHTML = slides[0].titulo
contenido.appendChild(titulo)

// Botón
const btn = document.createElement("button")
btn.className = "hero-btn"

const btnTexto = document.createElement("span")
btnTexto.textContent = "See Now"

const btnFlecha = document.createElement("img")
btnFlecha.src = "./assets/images/flecha.png"
btnFlecha.className = "hero-btn-flecha"

btn.appendChild(btnTexto)
btn.appendChild(btnFlecha)
contenido.appendChild(btn)

// Puntos
const dotsContainer = document.createElement("div")
dotsContainer.className = "hero-dots"
hero.appendChild(dotsContainer)

slides.forEach((slide, i) => {
  const dot = document.createElement("button")
  dot.className = "hero-dot" + (i === 0 ? " active" : "")
  dot.addEventListener("click", () => {
    slideActivo = i

    titulo.style.opacity = "0"
    atleta.style.opacity = "0"

    setTimeout(() => {
      titulo.innerHTML = slide.titulo
      atleta.src = slide.imagen

      setTimeout(() => {
        titulo.style.opacity = "1"
        atleta.style.opacity = "1"
      }, 50)
    }, 400)

    document.querySelectorAll(".hero-dot").forEach((d, j) => {
      d.classList.toggle("active", j === i)
    })
  })
  dotsContainer.appendChild(dot)
})

// Banner inferior
const bottomBanner = document.createElement("div")
bottomBanner.className = "hero-bottom-banner"
bottomBanner.textContent = "FIND YOUR PEAK, STAY THERE"
app.appendChild(bottomBanner)