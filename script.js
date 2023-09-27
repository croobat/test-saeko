// Definir puntuaciones
let playerScore = 0
let computerScore = 0

const userPiedra = document.getElementById("user-piedra")
const userPapel = document.getElementById("user-papel")
const userTijeras = document.getElementById("user-tijeras")

/**
 * Generar la selección aleatoria de la computadora
 *
 * @returns {string} Selección de la computadora ("piedra", "papel", or "tijeras").
 */
function computerPlay() {
  const choices = ["piedra", "papel", "tijeras"]
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

/**
 * Jugar una ronda del juego
 *
 * @param {string} playerSel - Player's selection ("piedra", "papel", or "tijeras").
 * @param {string} computerSel - Computer's selection ("piedra", "papel", or "tijeras").
 * @returns {string} Resultado de la ronda ("Ganaste", "Perdiste", or "Empataste").
 */
function playRound(playerSel, computerSel) {
  if (playerSel === computerSel) {
    return "Empataste"
  } else if (
    (playerSel === "piedra" && computerSel === "tijeras") ||
    (playerSel === "papel" && computerSel === "piedra") ||
    (playerSel === "tijeras" && computerSel === "papel")
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
 * @param {string} playerChoice - Player's choice ("piedra", "papel", or "tijeras").
 * @param {string} computerChoice - Computer's choice ("piedra", "papel", or "tijeras").
 * @returns {void}
 */
function updateScore(result, playerChoice, computerChoice) {
  const userScoreLabel = document.getElementById("user-score")
  const computerScoreLabel = document.getElementById("computer-score")
  const resultLabel = document.getElementById("result-label")

  // Actualizar puntuación
  userScoreLabel.textContent = playerScore
  computerScoreLabel.textContent = computerScore

  const userPlay = document.getElementById("user-play" + "-" + playerChoice)
  const userPlayTitle = document.getElementById("user-play-title")
  const computerPlay = document.getElementById("computer-play" + "-" + computerChoice)
  const computerPlayTitle = document.getElementById("computer-play-title")
  const userGame = document.getElementById("user-game");
  const description = document.getElementById("description");

  // if media query max-width: 768px, only do second timeout
  if (!window.matchMedia("(max-width: 768px)").matches) {
    userPlay.style.display = "block"
    computerPlay.style.display = "block"
    userPlayTitle.textContent = playerChoice
    computerPlayTitle.textContent = computerChoice
    description.textContent = ""

    setTimeout(() => {
      userPlay.style.display = "none";
      computerPlay.style.display = "none";
      userPlayTitle.textContent = "";
      computerPlayTitle.textContent = "";
      userGame.style.borderRight = "none";
      resultLabel.style.display = "block"
      resultLabel.textContent = result


      setTimeout(() => {
        userGame.style.borderRight = "1px solid black";
        resultLabel.style.display = "none";
        description.textContent = "Selecciona una opción";
      }, 2000);

    }, 2000);
  } else {
    userGame.style.borderRight = "none";
    resultLabel.style.display = "block"
    resultLabel.textContent = result

    setTimeout(() => {
      userGame.style.borderRight = "1px solid black";
      resultLabel.style.display = "none";
      description.textContent = "Selecciona una opción";
    }, 2000);
  }
}

/**
 * Manejar el clicks de los botones
 *
 * @param {string} playerChoice - Player's choice ("piedra", "papel", or "tijeras").
 * @returns {void}
 */
function handleButtonClick(playerChoice) {
  const computerChoice = computerPlay()
  const result = playRound(playerChoice, computerChoice)
  updateScore(result, playerChoice, computerChoice)
}

// Add click event listeners to the buttons
userPiedra.addEventListener("click", () => handleButtonClick("piedra"))
userPapel.addEventListener("click", () => handleButtonClick("papel"))
userTijeras.addEventListener("click", () => handleButtonClick("tijeras"))
