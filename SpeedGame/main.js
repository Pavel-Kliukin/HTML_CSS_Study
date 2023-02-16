const circles = document.querySelectorAll('.circles')
const scoreIs = document.getElementById('scoreIs')
let score = 0

function startGame() {
  circles.forEach((circle, i) => {
    circle.addEventListener('click', () => circleClicked(i + 1)) /* () - anonimous function that starts another function circleClicked with parametr i*/ */
  })
}

function circleClicked (i) {
  score += 1
  scoreIs.textContent = score
}
