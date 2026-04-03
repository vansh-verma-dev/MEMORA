let Cart_section = document.querySelector(".product_cart_deatils");
let Root = document.querySelector('.cart_root');

function ShowProduct() {
  let ProductData = JSON.parse(localStorage.getItem("productCartData")) || [];

  if (ProductData.length === 0) {
    Root.innerHTML = `
      <div class="cart_container">
        <i class="fa-solid fa-bag-shopping"></i>
        <h1>Empty Cart</h1>
        <a href="index.html"><button>Continue Shopping</button></a>
      </div>
    `;
    return;
  }
// clear cart Section
  Cart_section.innerHTML = "";

  // render data for localStorage
  ProductData.forEach((product, index) => {
    Cart_section.innerHTML += `
      <div class="product_details">

        <div class="product_head">
          <img src="${product.banner}" alt="">

          <div class="product_tittle">
            <h1>${product.productName}</h1>
            <p>${product.productSubhading}</p>

            <div class="rating">
              ⭐ ${product.Rating} (${product.Riview} reviews)
            </div>

            <div class="price">
              <span class="newPrice">${product.price} Rs</span>
            </div>

            <div class="delevery_time">
              <p>Delivery by tomorrow</p>
            </div>
          </div>
        </div>

        <div class="product_btn_group">
          <button><i class="fa-regular fa-bookmark"></i> Save for later</button>
          <button onclick="removeItem(${index})">
            <i class="fa-solid fa-trash"></i> Remove
          </button>
          <button><i class="fa-solid fa-basket-shopping"></i> Buy Now</button>
        </div>

      </div>
    `;
  });
}

// delete btn remove index product card
function removeItem(index) {
  let ProductData = JSON.parse(localStorage.getItem("productCartData")) || [];

  ProductData.splice(index, 1);

  localStorage.setItem("productCartData", JSON.stringify(ProductData));

  ShowProduct(); 
}
// window data loard & and run function
window.onload = ShowProduct;