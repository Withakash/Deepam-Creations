
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000); // Change image every 2 seconds
}

function myFunction(x) {
  x.classList.toggle("change");
}

function myBurger() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


function showhide() {
  var btnText = document.getElementById("showless");
  var x = document.getElementById("showhide");
  if (x.style.display === "none") {
    x.style.display = "flex";
    btnText.innerHTML = "Show less";
     
  } else {
    x.style.display = "none";
    btnText.innerHTML = "Show More"; 
  }
}

var loader = document.getElementById("preloader");
var home = document.getElementsByClassName("home-page");

window.addEventListener("load",function(){
  loader.style.display="none";
})


// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(productName, price) {
  const existingProduct = cart.find(item => item.name === productName);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display cart items on cart.html
function displayCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} x ${item.quantity} = ₹${itemTotal}`;
    cartItemsContainer.appendChild(itemElement);
  });

  cartTotalElement.textContent = total;
}

// Function to handle checkout
function checkout() {
  // Implement your checkout logic here
  alert('Proceeding to checkout...');
  // For example, redirect to a payment page or display a form
}

// Call displayCart when cart.html is loaded
if (window.location.pathname.endsWith('cart.html')) {
  displayCart();
}
