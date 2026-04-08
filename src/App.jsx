import { useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import ChoiceCards from './components/ChoiceCards';
import BattleArena from './components/BattleArena';
import ActionButtons from './components/ActionButtons';
import MoveHistory from './components/MoveHistory';
import { playSelect, playWin, playLose, playDraw } from './sounds';
import { spawnConfetti } from './confetti';

const CHOICES = ['rock', 'paper', 'scissors'];

function getResult(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  )
    return 'win';
  return 'lose';
}

function getComputerChoice(difficulty, history) {
  if (difficulty === 'Hard' && history.length >= 3) {
    const recent = history.slice(-5);
    const counts = { rock: 0, paper: 0, scissors: 0 };
    recent.forEach((h) => counts[h.player]++);

    let mostCommon = 'rock';
    if (counts.paper >= counts.rock && counts.paper >= counts.scissors)
      mostCommon = 'paper';
    if (counts.scissors >= counts.rock && counts.scissors >= counts.paper)
      mostCommon = 'scissors';

    const counter = { rock: 'paper', paper: 'scissors', scissors: 'rock' };
    if (Math.random() < 0.6) return counter[mostCommon];
  }

  return CHOICES[Math.floor(Math.random() * 3)];
}

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);
  const [round, setRound] = useState(1);
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState('Normal');
  const [history, setHistory] = useState([]);

  const totalRounds = playerScore + computerScore + draws;

  const handleSelect = useCallback(
    (choice) => {
      if (isRevealing) return;

      playSelect();
      const cpuChoice = getComputerChoice(difficulty, history);
      const roundResult = getResult(choice, cpuChoice);

      setPlayerChoice(choice);
      setComputerChoice(cpuChoice);
      setResult(roundResult);
      setIsRevealing(true);

      setTimeout(() => {
        if (roundResult === 'win') {
          setPlayerScore((s) => s + 1);
          setStreak((s) => s + 1);
          playWin();
          spawnConfetti();
        } else if (roundResult === 'lose') {
          setComputerScore((s) => s + 1);
          setStreak(0);
          playLose();
        } else {
          setDraws((d) => d + 1);
          playDraw();
        }

        setHistory((h) => [
          ...h,
          {
            round: h.length + 1,
            player: choice,
            computer: cpuChoice,
            result: roundResult,
          },
        ]);

        setIsRevealing(false);
      }, 700);
    },
    [isRevealing, difficulty, history]
  );

  const handleNextRound = useCallback(() => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setRound((r) => r + 1);
  }, []);

  const handleReset = useCallback(() => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setDraws(0);
    setRound(1);
    setStreak(0);
    setHistory([]);
  }, []);

  return (
    <div className="app">
      <Header />
      <ScoreBoard
        playerScore={playerScore}
        computerScore={computerScore}
        draws={draws}
        round={round}
        streak={streak}
        totalRounds={totalRounds}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
      />
      <ChoiceCards onSelect={handleSelect} disabled={isRevealing || !!result} />
      <BattleArena
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
        isRevealing={isRevealing}
      />
      <ActionButtons
        hasResult={!!result && !isRevealing}
        onNextRound={handleNextRound}
        onReset={handleReset}
      />
      <MoveHistory history={history} />
    </div>
  );
}
