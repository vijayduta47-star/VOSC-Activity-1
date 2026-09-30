# VOSC Activity-1 – Tic-Tac-Toe

A modern, responsive, two-player **Tic-Tac-Toe** web game built completely from scratch using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed and structured specifically for the **VOSC Activity-1** college submission.

---

## 📌 Project Overview

This project implements the classic 3x3 Tic-Tac-Toe game for two players. It provides an intuitive, polished user interface with smooth animations, dynamic turn indicators, interactive scoreboard tracking, winning line highlights, and draw detection.

The project is intentionally built with zero external libraries, frameworks, package managers, or build tools. It runs natively and instantly in any modern web browser by simply opening the `index.html` file.

---

## ✨ Features

- **2-Player Gameplay**: Turn-based play for Player X and Player O.
- **Interactive 3x3 Grid**: High-contrast, clickable cells with smooth hover and placement animations.
- **Turn Indicator**: Real-time status banner displaying whose turn it is (`Player X's Turn` / `Player O's Turn`).
- **Input Validation**: Prevents selecting already occupied cells and locks the board once a game concludes.
- **Win Detection**: Detects all 8 possible winning combinations (3 horizontal rows, 3 vertical columns, 2 diagonals).
- **Winning Cell Highlight**: Automatically highlights and pulses the 3 winning cells with animated visual feedback.
- **Draw Detection**: Accurately recognizes when all 9 squares are filled without a winner and displays `"It's a Draw!"`.
- **Scoreboard Tracking**: Tracks and displays **Player X Wins**, **Player O Wins**, and **Draws** across consecutive rounds.
- **New Game / Play Again**: Resets the board for a new round while preserving current match scores.
- **Reset Score**: Resets all scores back to zero and starts a fresh match.
- **Fully Responsive Design**: Fluid layout styled with modern CSS grid and flexbox, optimized across mobile, tablet, and desktop screens.
- **Zero External Dependencies**: 100% vanilla code with no external fonts, images, CDNs, or NPM packages.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessible grid structure, and metadata.
- **CSS3**: Modern layout (Flexbox & CSS Grid), CSS custom properties (variables), responsive typography, and keyframe animations (`markPop`, `winPulse`).
- **Vanilla JavaScript (ES6+)**: Event listeners, array state management, combination checking algorithms, and DOM manipulation.

---

## 📂 Project Structure

```
VOSC Activity-1/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Breakdown:
- **`index.html`**: Contains the semantic HTML structure including the title, score board, status banner, 3x3 grid, and action buttons.
- **`style.css`**: Contains all styling, color palettes, responsive media queries, and animations.
- **`script.js`**: Contains pure JavaScript logic for turn management, board state, win/draw detection, score calculation, and DOM updates.
- **`README.md`**: Project documentation, instructions, and submission guide.

---

## 🚀 How to Run the Game

No server, installation, Node.js, or build commands are required!

1. Download or clone this project folder to your local machine.
2. Navigate to the project directory:
   ```bash
   cd "VOSC Activity-1"
   ```
3. Open `index.html` directly in any web browser:
   - **Double-click** the `index.html` file in your File Explorer / Finder.
   - **OR** Right-click `index.html` and choose **Open with** -> **Google Chrome / Firefox / Microsoft Edge / Safari**.
   - **OR** Drag and drop `index.html` into an active browser window.

---

## 🎮 How to Play

1. Player X always moves first.
2. Click any empty square on the 3x3 grid to place your mark (**X** or **O**).
3. The turn automatically switches to the other player.
4. Continue taking turns until one player connects three marks in a row or all squares are filled.
5. Click **New Game** to start another round with the same scores.
6. Click **Reset Score** to reset all win/draw counts back to 0.

---

## 📜 Game Rules

- The game is played on a 3x3 grid.
- Players alternate placing their respective marks:
  - **Player 1**: `X` (Blue)
  - **Player 2**: `O` (Rose)
- The first player to align **3 of their marks** horizontally, vertically, or diagonally wins the round.
- If all 9 cells are occupied and neither player has 3 in a row, the round ends in a **Draw**.
- Moves cannot be undone or placed in already occupied cells.

---

## 👤 Author

- **Name**: `[Your Name Here]`
- **GitHub**: `[Your GitHub Profile URL / Username]`
- **Submission**: VOSC Activity-1

---

## 📄 License & Academic Integrity

This project is created strictly for educational purposes as part of the **VOSC Activity-1** prerequisite submission.
