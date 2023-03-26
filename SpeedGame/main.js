const circles = document.querySelectorAll('.circles')
const scoreIs = document.getElementById('scoreIs')
const yourScore = document.getElementById('yourScore')
const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const closeButton = document.querySelector('#closeButton')
// const music = new Audio('assets/Sounds/JamesBondTheme.mp3')
const music = document.querySelector('#music')
const musicSwitcher = document.querySelector('#musicButton')
let score = 0
let hlCircleNumber = 0
let timerHighlight
let timerAim
let pace = 1300
let missedRounds = 0
let wasAlreadyClicked = false // this variable is for avoid geting multiple points for multiple clicking on same highlighted circle

function startGame () { // Activates by Start button
  startButton.classList.add('hidenButton')
  stopButton.classList.remove('hidenButton')
  scoreIs.textContent = 0

  function newRound (hlCircle) {
    wasAlreadyClicked = false
    if (missedRounds >= 4) {
      return stopGame()
    }
    timerHighlight = setTimeout(highliteCircle, pace) // here we initiates Highlight for next circle
    timerAim = setTimeout(() => { // we add class aim to now highlited circle
      hlCircle.classList.remove('highlighted')
      hlCircle.classList.add('aim')
    }, pace / 2) // here we remove the highlight and aim from the current circle
    setTimeout(() => {
      hlCircle.classList.remove('aim')
    }, pace)
    pace -= 10
    missedRounds++
  }

  function highliteCircle () {
    const randomNumber = Math.floor(Math.random() * 4 + 1)
    if (hlCircleNumber === randomNumber) { // if random number is equival to the number of already highlighted circle
      highliteCircle() // then we choose another random number
    } else {
      const randomCircle = document.querySelector(`#c${randomNumber}`)
      randomCircle.classList.add('highlighted')
      hlCircleNumber = randomNumber
      newRound(randomCircle)
    }
  }

  function circleClicked (i) {
    const hlCircle = document.querySelector(`#c${hlCircleNumber}`)
    if (i === hlCircleNumber) {
      if (!wasAlreadyClicked) {
        score += 1
        clearTimeout(timerAim)
        hlCircle.classList.remove('highlighted')
        hlCircle.classList.remove('aim')
        missedRounds = 0
        scoreIs.textContent = score
        wasAlreadyClicked = true
      }
    } else {
      clearTimeout(timerHighlight)
      clearTimeout(timerAim)
      hlCircle.classList.remove('highlighted')
      hlCircle.classList.remove('aim')
      hlCircle.classList.add('shot')
      setTimeout(() => {
        stopGame()
      }, 2000)
    }
  }

  highliteCircle()

  circles.forEach((circle, i) => {
    circle.addEventListener('click', () => circleClicked(i + 1)) // () - anonimous function that starts another function circleClicked with parametr i
  })
}

function stopGame () {
  clearTimeout(timerHighlight)
  clearTimeout(timerAim)
  const closeButton = document.querySelector('#closeButton')
  hlCircleNumber = 0 // to cut the possibility of proceeding game and getting points

  function modalShow () {
    document.querySelector('.overlay').classList.toggle('visible')
    yourScore.textContent = `Your score: ${score}`
  }

  for (const circle of circles) {
    circle.classList.remove('highlighted')
  }

  modalShow()

  closeButton.addEventListener('click', modalShow)
}

function resetGame () {
  window.location.reload()
}

music.volume = 0.03
startButton.addEventListener('click', startGame)
stopButton.addEventListener('click', stopGame)
closeButton.addEventListener('click', resetGame)
musicSwitcher.addEventListener('click', () => {
  console.log('Music clicked')
  if (musicSwitcher.checked === true) {
    music.play()
    music.volume = 0.05
  } else {
    music.pause()
  }
})
