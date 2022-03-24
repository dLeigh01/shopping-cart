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

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let body = document.getElementsByTagName('tbody');
  body = body[0];

  while(body.hasChildNodes()){
    body.removeChild(body.firstChild);
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let body = document.getElementsByTagName('tbody');
  body = body[0];
  // DONE: Iterate over the items in the cart
  let itemName = [];
  let itemQuantity = [];

  for(let i in cart.items){
    itemName[i] = cart.items[i].product;
    itemQuantity[i] = cart.items[i].quantity;
    console.log(cart.items[i]);
  }
  
  for(let i in cart.items) {
    // DONE: Create a TR
    let elemTr = document.createElement('tr');

    // DONE: Create a TD for the delete link, quantity,  and the item
    let deleteTd = document.createElement('td');
    let quantityTd = document.createElement('td');
    let itemTd = document.createElement('td');
    deleteTd.textContent = 'x';
    quantityTd.textContent = itemQuantity[i];
    itemTd.textContent = itemName[i];

    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    body.appendChild(elemTr);
    elemTr.appendChild(deleteTd);
    elemTr.appendChild(quantityTd);
    elemTr.appendChild(itemTd);
  }
}

function removeItemFromCart(event) {
  let rmvItem = event.target.id

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
