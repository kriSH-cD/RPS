# 🎮 Rock · Paper · Scissors — Enhanced Edition

A modern, feature-rich Rock-Paper-Scissors game built with **React + Vite**. Play against the computer with real-time score tracking, move history, difficulty levels, and satisfying animations.

> **Live Demo:** [Play Now on Netlify](#) *(link updated after deployment)*

---

## ✨ Features

### Core Gameplay
- **Classic RPS Mechanics** — Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
- **Round Tracker** — Displays the current round number throughout the session.
- **Winner Display** — Clear result banner after each round: *You Win*, *Computer Wins*, or *It's a Draw*.
- **Reset Functionality** — One-click reset to clear scores, history, and start fresh.

### Advanced Enhancements
- **Move History** — Scrollable log showing every round played with player and computer moves, including Lucide icons and colored result tags (Won / Lost / Draw).
- **Streak Tracker** — Tracks consecutive wins with a 🔥 flame counter that resets on loss.
- **Win Rate Percentage** — Real-time win-rate calculated from all rounds played.
- **Difficulty Levels** — Three AI modes:
  - **Easy** — Random computer picks.
  - **Normal** — Pure random selection.
  - **Hard** — Adaptive AI that analyzes your last 5 moves and counters your most common choice (60% counter rate).

### Polish & UX
- **Animated Reveal** — Computer choice is hidden for 600ms with a "thinking" animation before revealing.
- **Sound Effects** — Web Audio API tones for selection, win, loss, and draw events.
- **Confetti Particles** — Canvas-based particle burst on every player win.
- **Clean Light Theme** — White/gray palette with teal accent, no dark mode, no purple.
- **Lucide Icons** — All game elements use clean vector icons instead of emojis (Mountain for Rock, FileText for Paper, Scissors for Scissors).
- **Responsive Design** — Adapts seamlessly to mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI components and state management |
| **Vite** | Fast development server and build tool |
| **Lucide React** | Lightweight SVG icon library |
| **Vanilla CSS** | Custom design system with CSS variables |
| **Web Audio API** | Dependency-free sound effects |
| **Canvas API** | Confetti particle animations |

---

## 📁 Project Structure

```
RPS/
├── index.html                  # Entry HTML with Inter font
├── vite.config.js              # Vite configuration
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Main game logic & state
│   ├── App.css                 # App layout
│   ├── index.css               # Global design tokens & reset
│   ├── sounds.js               # Web Audio API sound effects
│   ├── confetti.js             # Canvas particle system
│   └── components/
│       ├── Header.jsx / .css        # Title bar with Swords icon
│       ├── ScoreBoard.jsx / .css    # Scores, round, streak, win-rate
│       ├── ChoiceCards.jsx / .css    # Rock/Paper/Scissors buttons
│       ├── BattleArena.jsx / .css   # Animated reveal area
│       ├── ActionButtons.jsx / .css # Next Round / Reset controls
│       └── MoveHistory.jsx / .css   # Scrollable round log
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/kriSH-cD/RPS.git
cd RPS

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

The optimized output will be in the `dist/` folder, ready for deployment.

---

## 🌐 Deployment

This project is deployed on **Netlify**. To deploy your own:

1. Push to GitHub.
2. Connect the repo on [Netlify](https://app.netlify.com/).
3. Set build command: `npm run build`
4. Set publish directory: `dist`

---

## 🎯 How to Play

1. **Select a difficulty** — Easy, Normal, or Hard.
2. **Pick your move** — Click Rock, Paper, or Scissors.
3. **Watch the reveal** — The computer "thinks" for a moment, then reveals its choice.
4. **See the result** — A banner shows if you won, lost, or drew.
5. **Click Next Round** to continue, or **Reset All** to start over.
6. **Track your stats** — Check your streak, win rate, and full move history.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React + Vite**
