const $ = (selector) => document.querySelector(selector);
 
//Buttons
const menuEmail = $(".navbar-email");
const menuIconMobile = $(".menu");
const menuIconCart = $(".navbar-shopping-car");
 
//Menus
const desktopMenu = $(".desktop-menu");
const mobileMenu = $(".mobile-menu");
const shoppingCart = $(".product-detail");
 
//Container Cards
const cardContainer = document.querySelector('.cards-container')
 
//Products array
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: './assets/bike.jpeg',
});
productList.push({
    name: 'Celular',
    price: 220,
    image: './assets/bike.jpeg',
});
productList.push({
    name: 'Television',
    price: 190,
    image: './assets/bike.jpeg',
});
 
//Listeners
menuIconMobile.addEventListener("click", toggleMobileMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
menuIconCart.addEventListener("click", toggleShoppingCart);
 
//Function Events
function toggleDesktopMenu() {
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}
 
function toggleMobileMenu() {
    const isShoppingMenuCartClosed = shoppingCart.classList.contains('inactive');
 
    //If shopping cart menu is open, close it
    if(!isShoppingMenuCartClosed) {
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle("inactive");
}
 
function toggleShoppingCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    desktopMenu.classList.add("inactive");
    //If mobile menu is open, close it 
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    shoppingCart.classList.toggle("inactive");
}
 
/* 
<div class="product-card">
    <img src="./assets/bike.jpeg" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/
 
function renderList(array){
    for(product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        //product = {name, price, image} -> product.image
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.append(productName, productPrice);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardContainer.append(productCard);
    }
}
 
renderList(productList)

