const circles = document.querySelectorAll('.circles')
const scoreIs = document.getElementById('scoreIs')
const startButton = document.querySelector('#start_button')
const stopButton = document.querySelector('#stop_button')
let score = 0
let hlCircleNumber = 0

function startGame() {
  startButton.classList.add('notActiveButton')
  stopButton.classList.remove('notActiveButton')
  stopButton.classList.add('activeButton')
  scoreIs.textContent = 0

  highliteCircle()

  function highliteCircle() {
    const randomNumber = Math.floor(Math.random() * 4 + 1)
    if (hlCircleNumber === randomNumber) { // if random number is equival to the number of already highlighted circle
      highliteCircle() // then we choose another random number
    } else {
      console.log(randomNumber)
      const randomCircle = document.querySelector(`#c${randomNumber}`)
      randomCircle.classList.add('highlighted')
      hlCircleNumber = randomNumber
    }
  }

  circles.forEach((circle, i) => {
    circle.addEventListener('click', () => circleClicked(i + 1)) // () - anonimous function that starts another function circleClicked with parametr i
  })

  function circleClicked(i) {
    const hlCircle = document.querySelector(`#c${hlCircleNumber}`)
    console.log(`Circle ${i} was clicked`)
    if (i === hlCircleNumber) {
      hlCircle.classList.remove('highlighted')
      highliteCircle()
      score += 1
    }
    scoreIs.textContent = score
  }
}

function stopGame() {
  const closeButton = document.querySelector('#closeButton')
  const body = document.querySelector('body')
  hlCircleNumber = 0 // to cut the possibilty of proceeding game and getting points

  for (const circle of circles) {
    circle.classList.remove('highlighted')
  }

  const modalShow = () => {
    document.querySelector('.overlay').classList.toggle('visible')
  }

  modalShow()

  stopButton.classList.add('notActiveButton')
  body.style.background = 'linear-gradient(to left bottom, #efcf96, red)'
  closeButton.addEventListener('click', modalShow)
}
