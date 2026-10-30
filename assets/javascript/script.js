//make div
//append div in orders class and set attribute class order
//make div class image into div order








let ordersClass = document.querySelector(".orders");
let MainProducts = document.querySelector(".main-products")


let numbeRofProductElement = document.querySelector(".number-of-product");



// logic for cart
let cart = JSON.parse(localStorage.getItem("ct")) || [];
let total = 0;
let products = [
  {
    imgProduct: "url('https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800')",
    NameProduct: "ماوس لاسلكي",
    details: "ماوس لاسلكي مريح للاستخدام اليومي مع تصميم بسيط ودقيق.",
    priceProduct: 25,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800')",
    NameProduct: "كيبورد ميكانيكي",
    details: "كيبورد ميكانيكي بإضاءة خلفية وتصميم مناسب للألعاب والبرمجة.",
    priceProduct: 55,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800')",
    NameProduct: "سماعة رأس",
    details: "سماعة رأس مريحة بصوت واضح وميكروفون مدمج.",
    priceProduct: 45,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800')",
    NameProduct: "كاميرا ويب",
    details: "كاميرا ويب بدقة عالية مناسبة للمكالمات والاجتماعات.",
    priceProduct: 38,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800')",
    NameProduct: "سبيكر بلوتوث",
    details: "سبيكر بلوتوث صغير بصوت قوي وتصميم عصري.",
    priceProduct: 30,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800')",
    NameProduct: "سماعات لاسلكية",
    details: "سماعات لاسلكية صغيرة مع علبة شحن وعمر بطارية جيد.",
    priceProduct: 42,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800')",
    NameProduct: "شاشة كمبيوتر",
    details: "شاشة كمبيوتر بإطار نحيف وألوان واضحة للاستخدام اليومي.",
    priceProduct: 145,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1615663245857-acd977736e7e?w=800')",
    NameProduct: "ماوس ألعاب",
    details: "ماوس ألعاب سريع مع أزرار إضافية وإضاءة RGB.",
    priceProduct: 35,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800')",
    NameProduct: "كيبورد لاسلكي",
    details: "كيبورد لاسلكي نحيف وهادئ مناسب للمكتب والعمل.",
    priceProduct: 48,
    orderCount: 0
  },
  {
    imgProduct: "url('https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800')",
    NameProduct: "هارد SSD خارجي",
    details: "قرص SSD خارجي سريع لنقل الملفات وحفظ البيانات.",
    priceProduct: 75,
    orderCount: 0
  }
];


let htmlCart = document.querySelector(".hero-cart");
let elementTotal = document.querySelector(".price");
function displayNumberOfCart() {
  let orders=0;
  if(products.length!=0){
    for(let i=0;i<products.length;i++){
     orders += products[i].orderCount; 

    }
  numbeRofProductElement.innerHTML = `${orders}`;

  }
}
function displayCart() {
  if (cart.length != 0) {
    for (let i = 0; i < cart.length; i++) {

      Product(cart[i].img, cart[i].name, cart[i].details, cart[i].price,i,cart[i].orderCount);

    }

  }
  else {
    htmlCart.innerHTML = `
      <div class="cart-empty ">
      <p>نعتذر سلتك فارغه حاليا تصفح المنتجات لتعبئتها</p>
      
      
      <div class="botton shadow-top" style="text-wrap: nowrap; display: inline;">
      <a href="products.html">تصفح المنتجات</a>
      </div>
      </div>
      `;
  }
}

function Product(img, NameProduct, detailsProduct, productPrice,i,orderCount) {


  let totalPrice = orderCount * productPrice;

  //add order
  let Aorder = document.createElement("div");
  Aorder.setAttribute("class", "order")
  ordersClass.appendChild(Aorder);

  //image order
  let orderImage = document.createElement("div");
  orderImage.setAttribute("class", "order-img");
  orderImage.style.backgroundImage = img;
  Aorder.append(orderImage);
  // add details for order
  let productDetails = document.createElement("div");
  productDetails.setAttribute("class", "product-details");
  productDetails.innerHTML = `<h2>${NameProduct}</h2><p>${detailsProduct}</p>`;
  Aorder.append(productDetails);
  //add button increment and decrement
  let addProduct = document.createElement("div");
  addProduct.setAttribute("class", "add-product");
  Aorder.append(addProduct);

  let bottomIncrementDecrement = document.createElement("button");
  bottomIncrementDecrement.setAttribute("class", "bottom-increment-decrement");
  bottomIncrementDecrement.textContent = "-";
  bottomIncrementDecrement.onclick = function () {
    if (orderCount != 0) {
      --orderCount;
      totalPrice = orderCount * productPrice;
      total -= productPrice;
      elementTotal.textContent = `${total}$`;
      CountProduct.textContent = `${orderCount}`;
      priceProduct.textContent = `${totalPrice}$`;
    } if(orderCount==0){
      cart.pop(i);
    }
  };
  addProduct.append(bottomIncrementDecrement);

  let CountProduct = document.createElement("div");
  CountProduct.textContent = `${orderCount}`;
  addProduct.append(CountProduct);

  let bottomIncrementDecrement1 = document.createElement("button");
  bottomIncrementDecrement1.textContent = "+";
  bottomIncrementDecrement1.setAttribute("class", "bottom-increment-decrement");
  bottomIncrementDecrement1.onclick = function () {
    ++orderCount;
    totalPrice = orderCount * productPrice;
    total += productPrice;
    elementTotal.textContent = `${total}$`;
    CountProduct.textContent = `${orderCount}`;
    priceProduct.textContent = `${totalPrice}$`;

  };
  addProduct.append(bottomIncrementDecrement1);

  let priceProduct = document.createElement("div");
  priceProduct.setAttribute("class", "price-product");
  addProduct.append(priceProduct);

  priceProduct.textContent = `${totalPrice}$`;


}


function displayProduct() {
  if (products.length!= 0) {
    for (let i = 0; i < products.length; i++) {
      let product = document.createElement("div");
      product.className = "product";

      let image = document.createElement("div");
      image.className = "image";
      image.style.backgroundImage = products[i].imgProduct;
      product.append(image);

      let deitails = document.createElement("div");
      deitails.className = "deitails";
      let h3 = document.createElement("h3");
      h3.innerHTML = `${products[i].NameProduct}`;
      let p = document.createElement("p");
      p.innerHTML = `${products[i].details}`;
      deitails.append(h3);
      deitails.append(p);
      product.append(deitails);

      let priceAndAddCart = document.createElement("div");
      priceAndAddCart.className = "price-and-add-cart";
      let bottom = document.createElement("button");
      bottom.className = "botton";
      bottom.textContent = "الاضافه الى السلة";
      let price = document.createElement("div");
      price.className = "price";
      price.textContent = `$${products[i].priceProduct}`;
      priceAndAddCart.append(bottom);
      priceAndAddCart.append(price);
      product.append(priceAndAddCart)
      let toCart = {};
      MainProducts.append(product);

      bottom.onclick = function () {
      if(products[i].orderCount!=0){
        products[i].orderCount++;
        
      } else{
        products[i].orderCount++;
             toCart = {
          img: products[i].imgProduct,
          name: products[i].NameProduct,
          details: products[i].details,
          price: products[i].priceProduct,
          orderCount: products[i].orderCount
        }
        cart.push(toCart);
      }
       
        

       

        localStorage.setItem("ct", JSON.stringify(cart));
        displayNumberOfCart();
      
      };

    }

  }
}


if (htmlCart ) {
  displayCart();
}

if (MainProducts) {
  displayProduct();
}