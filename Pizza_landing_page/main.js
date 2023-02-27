let pizzaPrice = 7.5
let toppingsPrice = 0
let toppingsQuantity = 8 //the quantity of available toppings
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

//TOPPINGS BLOCK
let toppingsArr = []
function selectToppings(value) {

  if (toppingsArr.includes(value)) {
    toppingsArr.splice(toppingsArr.indexOf(value), 1) //This is the right way to delete exact item from an array insted of .pop()
  } else {
    toppingsArr.push(value)
  }
  //this is for toppings price calculation as a part of total price:
  if (toppingsArr.length <= 4) {
    toppingsPrice = 0
  }
  else {
    toppingsPrice = 0.5 * (toppingsArr.length - 4)
  }
  //this is for output toppings on the screen:
  if (toppingsArr.length === 0) {
    document.querySelector('#toppingName1').textContent = 'none'
    document.querySelector('#toppingPrice1').textContent = '0.00'
  } else {
    for (i = 1; i <= toppingsQuantity; i++) {
      if (i <= toppingsArr.length) {
        document.querySelector(`#toppingName${i}`).textContent = `${toppingsArr[i - 1]}` //output of topping's name
        let toppingPrice = document.querySelector(`#toppingPrice${i}`) //output of topping's price
        if (i <= 4) {
          toppingPrice.textContent = '0.00' //output of topping's price
        } else {
          toppingPrice.textContent = '0.50' //output of topping's price
        }
      } else {
        document.querySelector(`#toppingName${i}`).textContent = ''
        document.querySelector(`#toppingPrice${i}`).textContent = ''
      }
    }
  }

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
let totalPriceChange = document.querySelectorAll('#left')

//document.querySelectorAll doesn't have addEventListener method. So we have to make for loop to listen all possible events
// When any event comes, we changes the Total amount
for (let i = 0; i < totalPriceChange.length; i++) {
  totalPriceChange[i].addEventListener('change', priceChange)
}

let totalPrice = document.getElementById('totalPrice')

function priceChange() {
  totalPrice.textContent = (pizzaPrice + toppingsPrice + whereToEatPrice).toFixed(2)
}

//Date and time block
date = document.querySelector('#date')
time = document.querySelector('#time')
const today = new Date()
const yyyy = today.getFullYear()
let mm = today.getMonth() + 1 // Months start at 0!
let dd = today.getDate()
let hh = today.getHours()
let min = today.getMinutes()

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '.' + mm + '.' + yyyy;
date.textContent = formattedToday
time.textContent = hh + ':' + min