let pizzaPrice = 7.5
let toppingsPrice = 0
let whereToEatPrice = 0
let totalAmount = 7.50

//CUSTOMER'S NAME BLOCK
const customer = document.querySelector('#rightTitle')

function customersName(name) {
  (name === '') ? customer.textContent = 'ORDER' : customer.textContent = name.toUpperCase() + '\'S ORDER'
}

// PIZZA SIZE BLOCK
const pizzaSizeName = document.querySelector('#rightPizzaSizeName')
const pizzaSizePrice = document.querySelector('#rightPizzaSizePrice')

function pizzaSize(size, price) {
  pizzaSizeName.textContent = 'Size: ' + size
  pizzaSizePrice.textContent = price
  pizzaPrice = +price
}

// WHERE TO EAT BLOCK
const wteName = document.querySelector('#rightWTEName')
const wtePrice = document.querySelector('#rightWTEPrice')

function whereToEat(place) {
  wteName.textContent = place
  if (place === 'Home delivery') {
    wtePrice.textContent = '5.00'
    whereToEatPrice = 5
  } else {
    wtePrice.textContent = '0.00'
    whereToEatPrice = 0
  }
}

//TOTAL PRICE BLOCK
let totalPriceChange = document.querySelectorAll('#left');

//document.querySelectorAll doesn't have addEventListener method. So we have to make for loop to listen all possible events
// When any event comes, we changes the Total amount
for (let i = 0; i < totalPriceChange.length; i++) {
  totalPriceChange[i].addEventListener('change', priceChange);
}

let totalPrice = document.getElementById('totalPrice');

function priceChange() {
  totalPrice.textContent = (pizzaPrice + toppingsPrice + whereToEatPrice).toFixed(2);
}