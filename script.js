function showOverlay() {
    document.querySelector('.overlay').style.display = 'flex'; 
}

function hideOverlay() {
    document.querySelector('.overlay').style.display = 'none'; 
}

document.querySelector('.overlay').addEventListener('click', hideOverlay);
const thumbnails = document.querySelectorAll('.thumbnail-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', showOverlay);
    document.querySelector('#main_image').src = thumbnail.src;
});

function showCartDropDown() {
    document.querySelector('.cart-dropdown').style.display = 'block'; 
}

const cart = document.querySelector('.cart-icon');
cart.addEventListener('click', showCartDropDown);

let sneakers = 0;

document.addEventListener('click', function(event) {
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartIcon = document.querySelector('.cart-icon');

    if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
        cartDropdown.style.display = 'none'; 
    }
});

const quantity = document.querySelector('#quantity');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const addToCart = document.querySelector('.add-to-cart');

increase.addEventListener('click', () => {
    quantity.value = parseInt(quantity.value) + 1;
});

decrease.addEventListener('click', () => {
    if (quantity.value > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
});

addToCart.addEventListener('click', (event) => {
    event.stopPropagation(); 
    document.querySelector('.cart-dropdown-content').style.display = 'flex';
    document.querySelector('.empty-cart').style.display = 'none';
    sneakers += parseInt(quantity.value);
    quantity.value = 0; 
    updateSneakers();
    showCartDropDown(); 
});

function updateSneakers() {
    document.querySelector('#count').textContent = `x${sneakers}`; 
    document.querySelector('#total').textContent = `$${sneakers * 125.00}`; 
}

document.querySelector("#delete-icon").addEventListener('click', ()=> {
    sneakers = 0;
    document.querySelector('.cart-dropdown-content').style.display = 'none';
    document.querySelector('.empty-cart').style.display = 'block';
})

const overlayImages = document.querySelectorAll('.bottom-images img');


overlayImages.forEach(image => {
    image.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const mainImage = document.querySelector('#main_image');
        mainImage.src = image.src; 
    });
});

const bottomImages = document.querySelectorAll('.bottom-images img');
const mainImage = document.querySelector('#main_image');
let currentIndex = 0; 


function updateMainImage(index) {
    mainImage.src = bottomImages[index].src;
}

bottomImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index; 
        updateMainImage(currentIndex);
    });
});

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    event.stopPropagation();
    if (currentIndex > 0) {
        currentIndex--; 
    } else {
        currentIndex = bottomImages.length - 1; 
    }
    updateMainImage(currentIndex);
});


rightArrow.addEventListener('click', () => {
    event.stopPropagation();
    if (currentIndex < bottomImages.length - 1) {
        currentIndex++; 
    } else {
        currentIndex = 0; 
    }
    updateMainImage(currentIndex);
});
