import { Books } from "./BooksData.js";

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

let product = Books.find((item) => item.id == id);

let container = document.querySelector(".product_container");

container.innerHTML = `
 <div class="container">
    <section class="product-main">
        <div class="image-gallery">
            <div class="main-img-container">
                <img src="https://i.pinimg.com/1200x/9c/33/49/9c334953eb6687c1b082bbdbeaa693d6.jpg" id="mainImage" alt="Premium Album Book">
                <span class="badge">Best Seller</span>
            </div>
            <div class="thumbnail-row">
                <img src="https://via.placeholder.com/600x700" class="thumb active" onclick="changeImage(this)">
                <img src="https://i.pinimg.com/1200x/9c/33/49/9c334953eb6687c1b082bbdbeaa693d6.jpg" class="thumb" onclick="changeImage(this)">
                <img src="https://i.pinimg.com/1200x/9c/33/49/9c334953eb6687c1b082bbdbeaa693d6.jpg" class="thumb" onclick="changeImage(this)">
                <img src="https://i.pinimg.com/1200x/9c/33/49/9c334953eb6687c1b082bbdbeaa693d6.jpg" class="thumb" onclick="changeImage(this)">
                <img src="https://i.pinimg.com/736x/e6/74/a7/e674a70b9b971edcde69fd6b9bde12d2.jpg" class="thumb" onclick="changeImage(this)">
            </div>
        </div>

        <div class="product-details">
            <div class="info-header">
                <h1> ${product.title} Anniversary Album</h1>
                <p class="subtitle">Preserve your golden memories in a premium leather-bound finish.</p>
                <div class="rating">
                    <span class="stars">⭐⭐⭐⭐⭐ ${product.rating}</span>
                    <span class="reviews">( ${product.reviews} Reviews) | <a href="#">Write a review</a></span>
                </div>
            </div>

            <hr>

            <div class="price-section">
                <span class="current-price">₹1,499</span>
                <span class="old-price">₹2,999</span>
                <span class="discount">50% OFF</span>
                <p class="tax-info">Inclusive of all taxes</p>
            </div>

            <div class="specs">
                <div class="spec-item"><strong>Pages:</strong> 24 Premium Sheets</div>
                <div class="spec-item"><strong>Size:</strong> A4 Landscape</div>
                <div class="spec-item"><strong>Cover:</strong> Hardcover (Matte Finish)</div>
            </div>

            <div class="delivery-box">
                <p><i class="fas fa-truck"></i> Estimated Delivery: <strong>3-5 Business Days</strong></p>
                <p><i class="fas fa-undo"></i> 7 Days Replacement Policy | <strong>Free Delivery</strong></p>
            </div>

            <div class="action-btns">
                <button class="btn-buy">Order Now</button>
                <button class="btn-cart">Add to Cart</button>
                <button class="btn-wishlist"><i class="far fa-heart"></i></button>
            </div>

            <div class="trust-badges">
                <span><i class="fas fa-shield-alt"></i> Secure Payment</span>
                <span><i class="fas fa-headset"></i> 24/7 Support</span>
            </div>
        </div>
    </section>

    <section class="description-section">
        <h2>Product Description</h2>
        <p>This premium album is designed for those who value quality. Whether it's a wedding, travel, or a birthday, our high-definition printing ensures every color pops.</p>
        <div class="features-grid">
            <div class="f-item"><i class="fas fa-check-circle"></i> High Quality Print</div>
            <div class="f-item"><i class="fas fa-check-circle"></i> Premium Design</div>
            <div class="f-item"><i class="fas fa-check-circle"></i> Water Resistant Pages</div>
            <div class="f-item"><i class="fas fa-check-circle"></i> Perfect for Gifting</div>
        </div>
    </section>

    <section class="faq">
        <h2>Frequently Asked Questions</h2>
        <details>
            <summary>Can I customize the cover photo?</summary>
            <p>Yes, you can upload your own photo for the front cover during checkout.</p>
        </details>
        <details>
            <summary>What is the paper quality?</summary>
            <p>We use 300 GSM non-tearable premium silk finish paper.</p>
        </details>
    </section>

    <section class="support-footer">
        <p>Need help? <a href="#"><i class="fab fa-whatsapp"></i> Chat with us on WhatsApp</a> or Call 1800-123-456</p>
    </section>
</div>
`;

function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
  let thumbs = document.querySelectorAll(".thumb");
  thumbs.forEach((t) => t.classList.remove("active"));
  element.classList.add("active");
}
//wishlist btn 

// cart btn 
let msg_bar = document.getElementById("msg_bar");
let cartBtn = document.querySelector(".btn-cart");
let msg_close_btn = document.getElementById('msg_close_btn');
let cart_alert = document.getElementById('cart_alert');

cartBtn.addEventListener("click", () => {
  msg_bar.style.display = "flex";
  cart_alert.style.display = "flex"
 
  setTimeout(() => {
    msg_bar.style.display = "none";
  }, 3000);

   msg_close_btn.addEventListener('click',()=>{
  msg_bar.style.display = "none";
   }) 
});
