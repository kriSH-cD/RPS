import { useEffect, useState } from 'react';
import { Mountain, FileText, Scissors, HelpCircle, Loader, Trophy, Frown, Handshake } from 'lucide-react';
import './BattleArena.css';

const ICONS = {
  rock: Mountain,
  paper: FileText,
  scissors: Scissors,
};

const RESULT_CONFIG = {
  win: { text: 'You Win!', Icon: Trophy },
  lose: { text: 'Computer Wins!', Icon: Frown },
  draw: { text: "It's a Draw!", Icon: Handshake },
};

export default function BattleArena({ playerChoice, computerChoice, result, isRevealing }) {
  const [showComputer, setShowComputer] = useState(false);

  useEffect(() => {
    if (isRevealing) {
      setShowComputer(false);
      const timer = setTimeout(() => setShowComputer(true), 600);
      return () => clearTimeout(timer);
    }
    if (!playerChoice) setShowComputer(false);
  }, [isRevealing, playerChoice]);

  const getMoveClass = (side) => {
    if (!result || !showComputer) return '';
    if (result === 'draw') return 'arena__move--draw';
    if (side === 'player') return result === 'win' ? 'arena__move--win' : 'arena__move--lose';
    return result === 'lose' ? 'arena__move--win' : 'arena__move--lose';
  };

  const PlayerIcon = playerChoice ? ICONS[playerChoice] : HelpCircle;
  const ComputerIcon = showComputer && computerChoice ? ICONS[computerChoice] : null;

  return (
    <div>
      {result && showComputer && (() => {
        const { text, Icon } = RESULT_CONFIG[result];
        return (
          <div className={`arena__result arena__result--${result}`}>
            <Icon size={18} />
            {text}
          </div>
        );
      })()}

      <div className="arena">
        {/* Player side */}
        <div className="arena__player">
          <span className="arena__label">You</span>
          <div
            className={`arena__move ${
              !playerChoice ? 'arena__move--empty' : 'arena__move--reveal'
            } ${getMoveClass('player')}`}
          >
            <PlayerIcon size={32} strokeWidth={1.8} />
          </div>
          {playerChoice && (
            <span className="arena__choice-label">{playerChoice}</span>
          )}
        </div>

        {/* VS */}
        <div className="arena__vs">VS</div>

        {/* Computer side */}
        <div className="arena__player">
          <span className="arena__label">Computer</span>
          <div
            className={`arena__move ${
              !playerChoice
                ? 'arena__move--empty'
                : showComputer
                ? 'arena__move--reveal'
                : 'arena__move--thinking'
            } ${showComputer ? getMoveClass('computer') : ''}`}
          >
            {ComputerIcon ? (
              <ComputerIcon size={32} strokeWidth={1.8} />
            ) : playerChoice ? (
              <Loader size={24} strokeWidth={2} />
            ) : (
              <HelpCircle size={28} strokeWidth={1.5} />
            )}
          </div>
          {showComputer && computerChoice && (
            <span className="arena__choice-label">{computerChoice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
