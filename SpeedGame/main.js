const circles = document.querySelectorAll('.circles')
const scoreIs = document.getElementById('scoreIs')
const yourScore = document.getElementById('yourScore')
const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const closeButton = document.querySelector('#closeButton')
const live1 = document.querySelector('#live1')
const live2 = document.querySelector('#live2')
const live3 = document.querySelector('#live3')
live1.src = 'assets/alive.png'
live2.src = 'assets/alive.png'
live3.src = 'assets/alive.png'

let score = 0
let hlCircleNumber = 0
let timerAim
let timerShot
let hlCircle
let pace = 1300
let lives = 3

// MUSIC AND SOUNDS
const music = new Audio('./assets/Sounds/JamesBondTheme.mp3')
const shot = new Audio('./assets/Sounds/shot.mp3')
const silenceShot = new Audio('./assets/Sounds/SilenceShot.mp3')
const musicSwitcher = document.querySelector('#musicButton')
const soundSwitcher = document.querySelector('#soundButton')

musicSwitcher.addEventListener('click', musicOnOff)

function musicOnOff () {
  if (musicSwitcher.checked === true) {
    music.play()
    music.volume = 0.05
  } else {
    music.pause()
  }
}
// --- end of Music and sounds ---

// Buttons listeners
startButton.addEventListener('click', startGame)
stopButton.addEventListener('click', stopGame)
closeButton.addEventListener('click', () => window.location.reload()) // resets game

// STARTES LISTENING CIRCLES AND STARTS FIRST ROUND
function startGame () {
  circles.forEach((circle, i) => {
    circle.addEventListener('click', () => circleClicked(i + 1)) // () - anonimous function that starts another function circleClicked with parametr i+1
  })
  newRound()
}

// ACTIONS IN CASE OF ONE OF THE CIRCLES WAS CLICKED
function circleClicked (i) {
  clearTimeout(timerAim)
  clearTimeout(timerShot)
  // blockes circles to prevent them from clicking
  document.querySelector('.circlesClickPreventer').classList.add('visible')

  if (soundSwitcher.checked) {
    silenceShot.play()
    silenceShot.volume = 0.05
  }
  if (i === hlCircleNumber) { // if highlighted (right) circle was clicked
    score += 1
    hlCircle.classList.remove('highlighted')
    hlCircle.classList.remove('aim')
    hlCircle.classList.add('enemyKilled')
    scoreIs.textContent = score
    setTimeout(() => {
      hlCircle.classList.remove('enemyKilled')
      newRound(hlCircleNumber)
    }, 500)
  } else { // if wrong circle was clicked
    deadState()
  }
}

// NEW ROUND (first time startes from start button)
function newRound (prevHlCircleNumber = 0) { // prevHLCircle is a number of previous highlighted circle
  // removes ClickPreventer
  document.querySelector('.circlesClickPreventer').classList.remove('visible')

  startButton.classList.add('hidenButton')
  stopButton.classList.remove('hidenButton')

  // checking if there any lives left
  if (lives <= 0) {
    stopGame()
    return
  }

  // reduces the time for 1 round
  pace -= 30

  // HIGLIGHTES RANDOM CIRCLE
  highliteCircle()

  function highliteCircle () {
    const randomNumber = Math.floor(Math.random() * 4 + 1)
    if (prevHlCircleNumber === randomNumber) { // if random number is equal to the number of already highlighted circle
      highliteCircle(prevHlCircleNumber) // then we choose another random number
    } else {
      hlCircle = document.querySelector(`#c${randomNumber}`)
      hlCircle.classList.add('highlighted')
      hlCircleNumber = randomNumber
    }
  }

  // SETS TIMERS (how long each state will last)
  hlCircle.classList.add('highlighted')

  timerAim = setTimeout(() => {
    hlCircle.classList.remove('highlighted')
    hlCircle.classList.add('aim')
  }, pace / 2)

  timerShot = setTimeout(() => {
    deadState()
  }, pace)
}

// DEAD STATE
function deadState () {
  clearTimeout(timerAim)
  clearTimeout(timerShot)
  if (soundSwitcher.checked) {
    shot.play()
    shot.volume = 0.05
  }

  // blockes circles to prevent them from clicking
  document.querySelector('.circlesClickPreventer').classList.add('visible')

  // changes image in circle to shot
  hlCircle.classList.remove('highlighted')
  hlCircle.classList.remove('aim')
  hlCircle.classList.add('shot')

  // reduses lives and changes the images at the lives block on the control panel
  lives--
  if (lives === 2) {
    live1.src = 'assets/dead.png'
  } else if (lives === 1) {
    live2.src = 'assets/dead.png'
  } else if (lives === 0) {
    live3.src = 'assets/dead.png'
  }

  // startes new round
  setTimeout(() => {
    hlCircle.classList.remove('shot')
    newRound(hlCircleNumber)
  }, 1000)
}

// SHOWS TOTAL SCORES AND COMMENT
function stopGame () {
  clearTimeout(timerAim)
  clearTimeout(timerShot)

  function modalShow () {
    document.querySelector('.overlay').classList.toggle('visible')
    yourScore.textContent = `Your score: ${score}`
  }

  modalShow()

  closeButton.addEventListener('click', modalShow)
}
