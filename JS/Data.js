let Books = [

  //  INTERNATIONAL

  {
    id: 1,
    title: "Tokyo Trip Memories",
    subtitle: "Capture your unforgettable Japan journey",
    image: "https://i.pinimg.com/1200x/a6/28/f3/a628f3f607e09562152d4c0bdff3c524.jpg",
    rating: 4.8,
    reviews: 120,
    oldPrice: 349,
    price: 299,
    category: "international",
    pages: 20,
    size: "A4",
    badge: "Best Seller"
  },

  {
    id: 2,
    title: "Paris Love Story",
    subtitle: "Romantic memories from the city of love",
    image: "https://i.pinimg.com/736x/22/c6/d6/22c6d6bd9269f2cfc513b18322b56aaa.jpg",
    rating: 4.9,
    reviews: 210,
    oldPrice: 399,
    price: 329,
    category: "international",
    pages: 24,
    size: "A4",
    badge: "Trending"
  },

  {
    id: 3,
    title: "Maldives Escape",
    subtitle: "Your dreamy beach vacation memories",
    image: "https://i.pinimg.com/1200x/25/bc/7e/25bc7ea70140b0edc773b81ff21becc6.jpg",
    rating: 4.7,
    reviews: 180,
    oldPrice: 370,
    price: 310,
    pages: 22,
    category: "international",
    size: "A4",
    badge: "Hot"
  },

  {
    id: 4,
    title: "New York Adventures",
    subtitle: "Capture your city life moments",
    image: " https://i.pinimg.com/736x/31/bf/a8/31bfa894f3390c6ec33c5f1fd21a5551.jpg",
    rating: 4.6,
    reviews: 150,
    oldPrice: 360,
    price: 305,
    category: "international",
    pages: 20,
    size: "A4",
    badge: "Popular"
  },

  // 🇮🇳 INDIAN

  {
    id: 5,
    title: "Manali Trip Memories",
    subtitle: "Snowy mountains & unforgettable moments",
    image: "https://i.pinimg.com/1200x/25/bc/7e/25bc7ea70140b0edc773b81ff21becc6.jpg",
    rating: 4.8,
    reviews: 200,
    oldPrice: 320,
    price: 280,
    category: "Trip Books",
    pages: 20,
    size: "A4",
    badge: "Best Seller"
  },

  {
    id: 6,
    title: "Goa Beach Vibes",
    subtitle: "Party, sunset & beach memories",
    image: "https://i.pinimg.com/1200x/cb/01/57/cb015796badd8e0575907f5cf8330e8a.jpg",
    rating: 4.7,
    reviews: 175,
    oldPrice: 300,
    price: 260,
    category: "Love Story",
    pages: 18,
    size: "A4",
    badge: "Trending"
  },

  {
    id: 7,
    title: "Jaipur Royal Journey",
    subtitle: "Experience the royal heritage of Rajasthan",
    image:  "https://i.pinimg.com/1200x/54/ec/c8/54ecc89e51d7e398ceb29d165e3c38d1.jpg",
    rating: 4.6,
    reviews: 140,
    oldPrice: 310,
    price: 270,
    category: "Wedding",
    pages: 20,
    size: "A4",
    badge: "Popular"
  },

  {
    id: 8,
    title: "Kerala Backwaters",
    subtitle: "Peaceful nature & houseboat memories",
    image: "https://i.pinimg.com/736x/17/01/a2/1701a2dca4f1e0dc6772b8a15cbd82c0.jpg",
    rating: 4.9,
    reviews: 220,
    oldPrice: 350,
    price: 299,
    pages: 24,
    category: "trip",
    size: "A4",
    badge: "Top Rated"
  }

];

let searchBar = document.querySelector('.search_input');
let main = document.querySelector('.root');

// render Books in root 
function renderBooks(data) {
  main.innerHTML = "";

  data.forEach((item, index) => {
    main.innerHTML += `
      <div class="Book_card">
        <img src="${item.image}" alt="${item.title}" />

        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>

        <div class="rating_box">
          <span>⭐ ${item.rating}</span>
          <span>(${item.reviews} reviews)</span>
        </div>
<div class="product_card_links">
  <button><i class="fa-regular fa-heart"></i></button>
  <button><i class="fa-solid fa-share"></i></button>
</div>
        <button class="card_btn">View Info</button>
      </div>
    `;
  });
}

renderBooks(Books);


// search input filter &  render books 
document.querySelector(".hero-btn-main").addEventListener("click", () => {
  let value = searchBar.value.toLowerCase();

if(value === ""){
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
 

 