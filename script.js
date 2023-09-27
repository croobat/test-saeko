// Definir puntuaciones
let playerScore = 0
let computerScore = 0

const userRock = document.getElementById("user-rock")
const userPaper = document.getElementById("user-paper")
const userScissors = document.getElementById("user-scissors")

/**
 * Generar la selección aleatoria de la computadora
 *
 * @returns {string} Selección de la computadora ("rock", "paper", or "scissors").
 */
function computerPlay() {
  const choices = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

/**
 * Jugar una ronda del juego
 *
 * @param {string} playerSel - Player's selection ("rock", "paper", or "scissors").
 * @param {string} computerSel - Computer's selection ("rock", "paper", or "scissors").
 * @returns {string} Resultado de la ronda ("Ganaste", "Perdiste", or "Empataste").
 */
function playRound(playerSel, computerSel) {
  if (playerSel === computerSel) {
    return "Empataste"
  } else if (
    (playerSel === "rock" && computerSel === "scissors") ||
    (playerSel === "paper" && computerSel === "rock") ||
    (playerSel === "scissors" && computerSel === "paper")
  ) {
    playerScore++
    return "Ganaste"
  } else {
    computerScore++
    return "Perdiste"
  }
}

/**
 * Actualizar puntuación de la página
 *
 * @param {string} result - Resultado de la ronda ("Ganaste", "Perdiste", or "Empataste").
 * @returns {void}
 */
function updateScore(result) {
  const userScoreLabel = document.getElementById("user-score")
  const computerScoreLabel = document.getElementById("computer-score")
  const resultLabel = document.getElementById("result-label")

  userScoreLabel.textContent = playerScore
  computerScoreLabel.textContent = computerScore
  resultLabel.textContent = result
  resultLabel.style.display = "block"
}

/**
 * Manejar el clicks de los botones
 *
 * @param {string} playerChoice - Player's choice ("rock", "paper", or "scissors").
 * @returns {void}
 */
function handleButtonClick(playerChoice) {
  const computerChoice = computerPlay()
  const result = playRound(playerChoice, computerChoice)
  updateScore(result)
}

// Add click event listeners to the buttons
userRock.addEventListener("click", () => handleButtonClick("rock"))
userPaper.addEventListener("click", () => handleButtonClick("paper"))
userScissors.addEventListener("click", () => handleButtonClick("scissors"))
