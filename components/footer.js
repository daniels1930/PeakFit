// footer.js - Jhon Jairo Aguilar
const collectionsData = [
  { title: "Men", img: "assets/images/footer/Men.jpg" },
  { title: "Woman", img: "assets/images/footer/Woman.jpg" },
  { title: "accessories", img: "assets/images/footer/accessories.jpg" },
  { title: "equipment", img: "assets/images/footer/equipment.jpg" },
];

const collectionsSection = document.getElementById("collections-section");

const title = document.createElement("h2");
title.innerHTML = `FEATURED <span>COLLECTIONS</span>`;
title.classList.add("collections-title");

const container = document.createElement("div");
container.classList.add("collections-container");

collectionsData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.img;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const text = document.createElement("h3");
  text.textContent = item.title;

  const line = document.createElement("span");
  line.classList.add("line");

  overlay.appendChild(text);
  overlay.appendChild(line);
  card.appendChild(img);
  card.appendChild(overlay);
  container.appendChild(card);
});

collectionsSection.appendChild(title);
collectionsSection.appendChild(container);

const footer = document.getElementById("footer");
footer.innerHTML = `

<div class="footer-container">

    <div class="footer-top">
      <div class="logo-box">
        <img src="assets/images/footer/logo.png" alt="logo">
      </div>

      <p>
        PeakFit is a fitness focused e-commerce and marketplace built for a driven and growing fit community.
      </p>
    </div>

    <div class="footer-bottom">

      <div>
        <h4>Follow Us</h4>
        <div class="social">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>

      <div>
        <h4>About Us</h4>
        <ul>
          <li><i class="fas fa-user"></i> Who We Are</li>
          <li><i class="fas fa-truck"></i> Shipping Terms</li>
          <li><i class="fas fa-file-alt"></i> Terms & Conditions</li>
          <li><i class="fas fa-undo"></i> Returns</li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li><i class="fas fa-envelope"></i> support@peakfit.com</li>
          <li><i class="fab fa-whatsapp"></i> +1 347 829 5612</li>
        </ul>
      </div>

      <div>
        <h4>Help</h4>
        <ul>
          <li><i class="fas fa-question-circle"></i> FAQs</li>
          <li><i class="fas fa-ruler"></i> Size Guide</li>
        </ul>
      </div>

    </div>
  </div>
`;
