/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let body = document.getElementsByTagName('tbody');
 
  // while(body.hasChildNodes()){
  //   body.removeChild(body.firstChild);
    
  // }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let body = document.getElementsByTagName('tbody');
  body = body[0];
  // TODO: Iterate over the items in the cart
  let itemArray = [];
  for(let i in cart.items){
    itemArray = cart.items[i];

  }
  // DONE: Create a TR
  
  let elemTr = document.createElement('tr');
  
  
  // TODO: Create a TD for the delete link, quantity,  and the item
  let itemTd = document.createElement('td');
  itemTd.textContent = itemArray[1];
  itemTd.id = itemArray[1];
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  body.appendChild(elemTr);
  console.log(itemTd);
}

function removeItemFromCart(event) {
  let rmvItem = event.target.id

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
