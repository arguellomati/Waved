const menuEmail = document.querySelector(".navbar-email");
const desktop = document.querySelector(".desktop");
const menuCarrito = document.querySelector(".navbar-cart");
const productDetailClose = document.querySelector(".product-close")
const shoppingCart = document.querySelector(".product")
const cardsContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector(".product-detail")
const darkenScreen = document.querySelector(".darken");



menuEmail.addEventListener("click", toggleDesktop);
menuCarrito.addEventListener("click", toggleCarritoAside);
productDetailClose.addEventListener("click", closeProductDetail);

function darkenChange(){
    darkenScreen.classList.toggle("inactive");
}

function toggleDesktop() {
    desktop.classList.toggle("inactive");
    shoppingCart.classList.add("inactive")
    productDetail.classList.add("inactive")

    const isMenuDesktop = !desktop.classList.contains("inactive")

    if(isMenuDesktop){
        darkenScreen.classList.remove("inactive");
    } else {
        darkenScreen.classList.add("inactive");
    }
}


function toggleCarritoAside () {
    shoppingCart.classList.toggle("inactive");
    desktop.classList.add("inactive")
    productDetail.classList.add("inactive")

    const isShoppingCart= !productDetail.classList.contains("inactive");

    if(isShoppingCart){
        darkenScreen.classList.remove("inactive");
    } else {
        darkenScreen.classList.add("inactive");
    }
}

function openProductDetail(){
    productDetail.classList.remove("inactive")
    darkenScreen.classList.add("inactive");
}

function closeProductDetail() {
    productDetailClose.classList.add("inactive")
    productDetail.classList.add("inactive")
    desktop.classList.add("inactive");
    darkenScreen.classList.remove("inactive");
}

const productList=[];
productList.push({
    name:'Not feeling it',
    price:5000,
    image:'./logos/notfeeling.PNG',
});
productList.push({
    name:'Rainbow',
    price:5000,
    image:'./logos/rainbow.PNG',
});
productList.push({
    name:'Make money',
    price:5000,
    image:'./logos/makemoney.PNG',
});
productList.push({
    name:'Trust no one',
    price:5000,
    image:'./logos/trustnoone.PNG',
});
productList.push({
    name:'Gangsters dont cry',
    price:5000,
    image:'./logos/gangster.PNG',
});
productList.push({
    name:'Paradise',
    price:5000,
    image:'./logos/paradise.PNG',
});
productList.push({
    name:'Salty!',
    price:5000,
    image:'./logos/salty.PNG',
});
productList.push({
    name:'Taste your words',
    price:5000,
    image:'./logos/tastewords.PNG',
});
productList.push({
    name:'Ride Or Die!',
    price:5000,
    image:'./logos/rideordie.PNG',
});
productList.push({
    name:'Aloha!',
    price:5000,
    image:'./logos/aloha!.PNG',
});
function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener("click", openProductDetail)
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv=document.createElement('div');
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);