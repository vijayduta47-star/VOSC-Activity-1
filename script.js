/**
 * ============================================================================
 * Tic-Tac-Toe Game Logic
 * VOSC Activity-1
 * Pure Vanilla JavaScript - No External Dependencies
 * ============================================================================
 */

// --- Game State Variables ---
// 1D array representing the 9 cells of the 3x3 board (indices 0 to 8)
let boardState = ["", "", "", "", "", "", "", "", ""];

// Tracks the active player ('X' or 'O'). Player X always starts.
let currentPlayer = "X";

// Boolean flag indicating if the current round is playable
let isGameActive = true;

// Score tracker object for persistent score keeping across rounds
const scores = {
  X: 0,
  O: 0,
  ties: 0,
};

// All 8 possible winning combinations (3 rows, 3 columns, 2 diagonals)
const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top Row
  [3, 4, 5], // Middle Row
  [6, 7, 8], // Bottom Row
  [0, 3, 6], // Left Column
  [1, 4, 7], // Center Column
  [2, 5, 8], // Right Column
  [0, 4, 8], // Main Diagonal (top-left to bottom-right)
  [2, 4, 6], // Anti-Diagonal (top-right to bottom-left)
];

// --- DOM Element References ---
const cellElements = document.querySelectorAll(".cell");
const statusMessageElement = document.getElementById("statusMessage");
const newGameBtn = document.getElementById("newGameBtn");
const resetScoreBtn = document.getElementById("resetScoreBtn");

const scoreXElement = document.getElementById("scoreX");
const scoreOElement = document.getElementById("scoreO");
const scoreTiesElement = document.getElementById("scoreTies");

const scoreCardX = document.getElementById("scoreCardX");
const scoreCardO = document.getElementById("scoreCardO");

/**
 * Initializes the game application:
 * Sets up event listeners and starts the first game round.
 */
function init() {
  // Attach click listeners to all 9 board cells
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  // Attach control button listeners
  newGameBtn.addEventListener("click", resetGame);
  resetScoreBtn.addEventListener("click", resetScore);

  // Start initial game round
  startGame();
}

/**
 * Starts or restarts a game round.
 * Resets the board array, UI elements, turn indicator, and active state.
 */
function startGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;

  // Clear cells in the UI
  cellElements.forEach((cell, index) => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "winner");
    cell.removeAttribute("disabled");
    cell.setAttribute("aria-label", `Square ${index + 1}, empty`);
  });

  // Reset status banner styling & text
  statusMessageElement.className = "status-banner";
  updateTurnDisplay();
}

/**
 * Handles a player's click on a board cell.
 * @param {Event} event - The DOM click event
 */
function handleCellClick(event) {
  const clickedCell = event.target.closest(".cell");
  if (!clickedCell) return;

  const cellIndex = parseInt(clickedCell.getAttribute("data-cell-index"), 10);

  // Ignore click if invalid index, cell is already filled, or game is over
  if (isNaN(cellIndex) || boardState[cellIndex] !== "" || !isGameActive) {
    return;
  }

  // Record and render the move
  makeMove(clickedCell, cellIndex);

  // Evaluate the board for win or draw
  evaluateBoard();
}

/**
 * Records the move in the game state array and updates the cell DOM.
 * @param {HTMLElement} cell - The clicked cell button
 * @param {number} index - Index of the cell (0-8)
 */
function makeMove(cell, index) {
  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  cell.setAttribute("aria-label", `Square ${index + 1}, occupied by ${currentPlayer}`);
}

/**
 * Evaluates game state for a win, a draw, or advances to the next player.
 */
function evaluateBoard() {
  const winningCombo = checkWinner();

  if (winningCombo) {
    // Current player has won
    highlightWinningCells(winningCombo);
    endGame(false, currentPlayer);
    return;
  }

  if (checkDraw()) {
    // All cells filled with no winner
    endGame(true);
    return;
  }

  // Switch turn to the opposing player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateTurnDisplay();
}

/**
 * Checks all winning combinations against current board state.
 * @returns {Array<number>|null} - Array of 3 winning indices, or null if no win
 */
function checkWinner() {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i];
    if (
      boardState[a] !== "" &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return WINNING_COMBINATIONS[i];
    }
  }
  return null;
}

/**
 * Checks whether the board has reached a tie/draw.
 * @returns {boolean} - True if every cell is non-empty
 */
function checkDraw() {
  return boardState.every((cell) => cell !== "");
}

/**
 * Highlights the 3 winning cells on the board.
 * @param {Array<number>} combination - The three winning cell indices
 */
function highlightWinningCells(combination) {
  combination.forEach((index) => {
    cellElements[index].classList.add("winner");
  });
}

/**
 * Finalizes the game round, updates scores, and locks board interaction.
 * @param {boolean} isDraw - True if game ended in a draw
 * @param {string} winner - 'X' or 'O' if there is a winner
 */
function endGame(isDraw, winner = null) {
  isGameActive = false;

  if (isDraw) {
    scores.ties += 1;
    statusMessageElement.textContent = "It's a Draw!";
    statusMessageElement.className = "status-banner draw";
    scoreCardX.classList.remove("active");
    scoreCardO.classList.remove("active");
  } else {
    scores[winner] += 1;
    statusMessageElement.textContent = `Player ${winner} Wins!`;
    statusMessageElement.className = `status-banner win-${winner.toLowerCase()}`;

    // Highlight the winner's scoreboard card
    if (winner === "X") {
      scoreCardX.classList.add("active");
      scoreCardO.classList.remove("active");
    } else {
      scoreCardO.classList.add("active");
      scoreCardX.classList.remove("active");
    }
  }

  updateScoreDisplay();
}

/**
 * Updates the turn indicator message and scoreboard active styles.
 */
function updateTurnDisplay() {
  statusMessageElement.textContent = `Player ${currentPlayer}'s Turn`;

  if (currentPlayer === "X") {
    scoreCardX.classList.add("active");
    scoreCardO.classList.remove("active");
  } else {
    scoreCardO.classList.add("active");
    scoreCardX.classList.remove("active");
  }
}

/**
 * Updates the numerical scores displayed on the scoreboard.
 */
function updateScoreDisplay() {
  scoreXElement.textContent = scores.X;
  scoreOElement.textContent = scores.O;
  scoreTiesElement.textContent = scores.ties;
}

/**
 * Resets the board for a new round while preserving existing scores.
 */
function resetGame() {
  startGame();
}

/**
 * Resets all scores (Player X, Player O, Draws) back to 0 and starts a new game.
 */
function resetScore() {
  scores.X = 0;
  scores.O = 0;
  scores.ties = 0;
  updateScoreDisplay();
  resetGame();
}

// Initialize the game when DOM content is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
