const $ = (selector) => document.querySelector(selector);
 
//Buttons
const menuEmail = $(".navbar-email");
const menuIconMobile = $(".menu");
const menuIconCart = $(".navbar-shopping-car");
const productDetailIconClose = $('.product-detail-close')
 
//Menus
const desktopMenu = $(".desktop-menu");
const mobileMenu = $(".mobile-menu");
const shoppingCart = $("#shoppingCartContainer");

//Container product
const productDetailContainer = $("#productDetail");

//Container Cards
const cardContainer = document.querySelector('.cards-container')
 
//Products array
const productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
 
//Listeners
menuIconMobile.addEventListener("click", toggleMobileMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
menuIconCart.addEventListener("click", toggleShoppingCart);
productDetailIconClose.addEventListener('click', productDetailClose);
 
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
    productDetailClose ();
    mobileMenu.classList.toggle("inactive");
}
 
function toggleShoppingCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    //If mobile menu is open, close it 
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    shoppingCart.classList.toggle("inactive");
}
 
function renderList(array){
    for(product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const imgCard = document.createElement('img');
        //product = {name, price, image} -> product.image
        imgCard.setAttribute('src', product.image);
        imgCard.addEventListener('click', openProductDetail);
        shoppingCart.classList.add('inactive');
    
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
        productCard.append(imgCard, productInfo);
        cardContainer.append(productCard);
    }
}

function openProductDetail(){
    shoppingCart.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function productDetailClose (){
    productDetailContainer.classList.add("inactive");
}
renderList(productList)

