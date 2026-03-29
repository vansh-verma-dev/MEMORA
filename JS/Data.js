let Books = [
  {
    id: 1,
    title: "Tokyo Trip Memories",
    subtitle: "Capture your unforgettable Japan journey",
    image: "https://i.pinimg.com/1200x/a6/28/f3/a628f3f607e09562152d4c0bdff3c524.jpg",
    rating: 4.8,
    reviews: 120,
    oldPeice: 320,
    price: 299,
    pages: 20,
    size: "A4",
    badge: "Best Seller"
  },
  {
    id: 2,
    title: "Maldives Trip",
    subtitle: "Enjoy your beach paradise memories",
    image: "https://i.pinimg.com/1200x/a6/28/f3/a628f3f607e09562152d4c0bdff3c524.jpg",
    rating: 4.4,
    reviews: 170,
    price: 299,
      oldPeice: 320,
    pages: 20,
    size: "A4",
    badge: "Best Seller"
  },
    {
    id: 1,
    title: "Tokyo Trip Memories",
    subtitle: "Capture your unforgettable Japan journey",
    image: "https://i.pinimg.com/1200x/a6/28/f3/a628f3f607e09562152d4c0bdff3c524.jpg",
    rating: 4.8,
    reviews: 120,
    oldPeice: 320,
    price: 299,
    pages: 20,
    size: "A4",
    badge: "Best Seller"
  },
  {
    id: 2,
    title: "Maldives Trip",
    subtitle: "Enjoy your beach paradise memories",
    image: "https://i.pinimg.com/1200x/a6/28/f3/a628f3f607e09562152d4c0bdff3c524.jpg",
    rating: 4.4,
    reviews: 170,
    price: 299,
      oldPeice: 320,
    pages: 20,
    size: "A4",
    badge: "Best Seller"
  }
];
 

let main = document.querySelector('.root');
 Books.forEach((curnEle,index)=>{
    main.innerHTML +=  `
      <div class="Book_card" key="index">
          <img
            src=${curnEle.image}
            alt=""
          />
          <h3>${curnEle.title}</h3>
          <p>${curnEle.subtitle}</p>
          <div class="rating_box">
            <span><i class="fa-solid fa-star"></i>${curnEle.rating}</span
            ><span>(${curnEle.reviews}k riview)</span>
          </div>
          
          <button class="card_btn">View Info</button>
        </div>
        `
 });

console.log(main);