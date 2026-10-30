//make div
//append div in orders class and set attribute class order
//make div class image into div order








let ordersClass = document.querySelector(".orders");
let MainProducts = document.querySelector(".main-products")





// logic for cart
let cart = ["",0,0,0,0,0,0,0,0,0];
let order = [""];
let total = 0;
let products = 10; 
let imgProduct = [
    "url('https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800')",
    "url('https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800')",
    "url('https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800')",
    "url('https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800')",
    "url('https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800')",
    "url('https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800')",
    "url('https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800')",
    "url('https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800')",
    "url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800')",
    "url('https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800')"
];

let NameProduct = [
    "ماوس لاسلكي",
    "كيبورد ميكانيكي",
    "سماعة رأس",
    "كاميرا ويب",
    "سبيكر بلوتوث",
    "سماعات لاسلكية",
    "شاشة كمبيوتر",
    "ماوس ألعاب",
    "كيبورد لاسلكي",
    "هارد SSD خارجي"
];

let details = [
    "ماوس لاسلكي مريح للاستخدام اليومي مع تصميم بسيط ودقيق.",
    "كيبورد ميكانيكي بإضاءة خلفية وتصميم مناسب للألعاب والبرمجة.",
    "سماعة رأس مريحة بصوت واضح وميكروفون مدمج.",
    "كاميرا ويب بدقة عالية مناسبة للمكالمات والاجتماعات.",
    "سبيكر بلوتوث صغير بصوت قوي وتصميم عصري.",
    "سماعات لاسلكية صغيرة مع علبة شحن وعمر بطارية جيد.",
    "شاشة كمبيوتر بإطار نحيف وألوان واضحة للاستخدام اليومي.",
    "ماوس ألعاب سريع مع أزرار إضافية وإضاءة RGB.",
    "كيبورد لاسلكي نحيف وهادئ مناسب للمكتب والعمل.",
    "قرص SSD خارجي سريع لنقل الملفات وحفظ البيانات."
];

let priceProduct = [
  25,
  55,
  45,
  38,
  30,
  42,
  145,
  35,
  48,
  75
];


let htmlCart = document.querySelector(".hero-cart");
let elementTotal = document.querySelector(".price");

function displayCart(){
  
  if(order.length!=0 && cart.length!=0){
    for(let i =0 ; i<cart.length;i++){
      
      Product(imgProduct[i],NameProduct[i],details[i],priceProduct[i]);
      
    }
    
  }
  else 
    {
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
  
  function Product(img,NameProduct,detailsProduct,productPrice){
    
    
    let countOrders = 0;
    let totalPrice = countOrders * productPrice;
    
    //add order
    let Aorder = document.createElement("div");
    Aorder.setAttribute("class", "order")
    ordersClass.appendChild(Aorder);

    //image order
    let orderImage = document.createElement("div");
    orderImage.setAttribute("class","order-img");
    orderImage.style.backgroundImage = img;
    Aorder.append(orderImage);
    // add details for order
    let productDetails = document.createElement("div");
    productDetails.setAttribute("class","product-details");
    productDetails.innerHTML = `<h2>${NameProduct}</h2><p>${detailsProduct}</p>`;
    Aorder.append(productDetails);
    //add button increment and decrement
    let addProduct = document.createElement("div");
    addProduct.setAttribute("class","add-product");
    Aorder.append(addProduct);

    let bottomIncrementDecrement = document.createElement("button");
    bottomIncrementDecrement.setAttribute("class","bottom-increment-decrement");
    bottomIncrementDecrement.textContent = "-";
    bottomIncrementDecrement.onclick = function(){
      --countOrders;
      totalPrice =  countOrders * productPrice;
      total -= productPrice;
      elementTotal.textContent = `${total}$`;
      CountProduct.textContent = `${countOrders}`;                
      priceProduct.textContent = `${totalPrice}$`;
      
    };    
    addProduct.append(bottomIncrementDecrement);
    
    let CountProduct = document.createElement("div");
    CountProduct.textContent = `${countOrders}`;                
    addProduct.append(CountProduct);
    
    let bottomIncrementDecrement1 = document.createElement("button");
    bottomIncrementDecrement1.textContent = "+";
    bottomIncrementDecrement1.setAttribute("class","bottom-increment-decrement");
    bottomIncrementDecrement1.onclick = function(){
      ++countOrders;
       totalPrice =  countOrders * productPrice;
       total += productPrice;
       elementTotal.textContent = `${total}$`;
       CountProduct.textContent = `${countOrders}`;                
       priceProduct.textContent = `${totalPrice}$`;
      
      };
    addProduct.append(bottomIncrementDecrement1);
    
    let priceProduct = document.createElement("div");
    priceProduct.setAttribute("class","price-product");
    addProduct.append(priceProduct);
    
    priceProduct.textContent = `${totalPrice}$`;
    

  }


  function displayProduct(){
    if(products!=0){
    for(let i =0; i<products;i++){
   let  product =  document.createElement("div");
product.className = "product";

let image = document.createElement("div");
image.className = "image";
image.style.backgroundImage = `url('${imgProduct[i]}')`;
product.append(image);

let deitails = document.createElement("div");
deitails.className = "deitails";
let h3 = document.createElement("h3");
h3.innerHTML =`${NameProduct[i]}`;
let p = document.createElement("p");
p.innerHTML =`${details[i]}`;
deitails.append(h3);
deitails.append(p);
product.append(deitails);

let priceAndAddCart = document.createElement("div");
priceAndAddCart.className = "price-and-add-cart";
let bottom = document.createElement("button");
bottom.className= "botton";
bottom.textContent = "الاضافه الى السلة";
let price = document.createElement("div");
price.className ="price";
price.textContent = `$${priceProduct[i]}`;
priceAndAddCart.append(bottom);
priceAndAddCart.append(price);
product.append(priceAndAddCart)

    MainProducts.append(product);

    }

    }
  }
  displayProduct();
  displayCart();


  