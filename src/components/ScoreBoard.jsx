import { Flame } from 'lucide-react';
import './ScoreBoard.css';

const DIFFICULTIES = ['Easy', 'Normal', 'Hard'];

export default function ScoreBoard({
  playerScore,
  computerScore,
  draws,
  round,
  streak,
  totalRounds,
  difficulty,
  onDifficultyChange,
}) {
  const winRate =
    totalRounds > 0 ? Math.round((playerScore / totalRounds) * 100) : 0;

  return (
    <>
      {/* Difficulty selector */}
      <div className="difficulty">
        <span className="difficulty__label">Difficulty:</span>
        {DIFFICULTIES.map((d) => (
          <button
            key={d}
            className={`difficulty__btn ${difficulty === d ? 'difficulty__btn--active' : ''}`}
            onClick={() => onDifficultyChange(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="scoreboard">
        {/* Player */}
        <div className="scoreboard__card scoreboard__card--player">
          <div className="scoreboard__label">You</div>
          <div className="scoreboard__value scoreboard__value--player">
            {playerScore}
          </div>
          <div className="scoreboard__streak">
            <Flame size={13} className="scoreboard__streak-icon" />
            Streak: {streak}
          </div>
          <div className="scoreboard__winrate">Win rate: {winRate}%</div>
        </div>

        {/* Center — Round & Draws */}
        <div className="scoreboard__card scoreboard__card--center">
          <div>
            <div className="scoreboard__label">Round</div>
            <div className="scoreboard__value scoreboard__value--round">
              {round}
            </div>
          </div>
          <div className="scoreboard__divider" />
          <div>
            <div className="scoreboard__label">Draws</div>
            <div className="scoreboard__value scoreboard__value--draw">
              {draws}
            </div>
          </div>
        </div>

        {/* Computer */}
        <div className="scoreboard__card scoreboard__card--computer">
          <div className="scoreboard__label">Computer</div>
          <div className="scoreboard__value scoreboard__value--computer">
            {computerScore}
          </div>
        </div>
      </div>
    </>
  );
}
