import { Books } from "./BooksData.js";

console.log(Books)
let searchBar = document.querySelector('.search_input');
let main = document.querySelector('.root');

function renderBooks(data) {
  main.innerHTML = "";

  data.forEach((item) => {
    main.innerHTML += `
<div class="Book_card">

  <div class="img_box">
    <img src="${item.image}" alt="${item.title}" />

    <div class="product_card_links">
      <button><i class="fa-regular fa-heart"></i></button>
      <button><i class="fa-solid fa-share"></i></button>
    </div>
  </div>

  <div class="card_content">
    <h3>${item.title}</h3>
    <p>${item.subtitle}</p>

    <div class="rating_box">
      <span>⭐ ${item.rating}</span>
      <span>(${item.reviews} reviews)</span>
    </div>

    <button class="card_btn" data-id="${item.id}">
      View Info →
    </button>
  </div>

</div>
    `;
  });

  //  CLICK EVENT (IMPORTANT)
  document.querySelectorAll('.card_btn').forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = btn.getAttribute("data-id");
      window.location.href = `product_page.html?id=${id}`;
    });
  });
}

// FIRST LOAD
renderBooks(Books);

// SEARCH
document.querySelector(".hero-btn-main").addEventListener("click", () => {
  let value = searchBar.value.toLowerCase();

  if (value === "") {
    renderBooks(Books);
    return;
  }

  let filtered = Books.filter((item) => {
    return (
      item.title.toLowerCase().includes(value) ||
      item.subtitle.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value)
    );
  });

  renderBooks(filtered);
});








const elements = document.querySelectorAll(".scroll");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();

 