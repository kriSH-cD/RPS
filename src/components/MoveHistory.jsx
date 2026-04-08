import { Mountain, FileText, Scissors } from 'lucide-react';
import './MoveHistory.css';

const ICONS = {
  rock: Mountain,
  paper: FileText,
  scissors: Scissors,
};

export default function MoveHistory({ history }) {
  return (
    <section className="history">
      <div className="history__header">
        <h2 className="history__title">Move History</h2>
        <span className="history__count">
          {history.length} round{history.length !== 1 ? 's' : ''}
        </span>
      </div>

      {history.length === 0 ? (
        <div className="history__empty">No moves yet — pick your first weapon!</div>
      ) : (
        <ol className="history__list">
          {[...history].reverse().map((entry, i) => {
            const PlayerIcon = ICONS[entry.player];
            const CpuIcon = ICONS[entry.computer];
            return (
              <li className="history__item" key={history.length - i}>
                <span
                  className={`history__round-badge history__round-badge--${entry.result}`}
                >
                  {entry.round}
                </span>
                <div className="history__moves">
                  <strong>You:</strong>
                  <span className={`history__move-icon history__move-icon--${entry.player}`}>
                    <PlayerIcon size={14} strokeWidth={2} />
                  </span>
                  {entry.player}
                  <span style={{ color: 'var(--text-dim)' }}>vs</span>
                  <strong>CPU:</strong>
                  <span className={`history__move-icon history__move-icon--${entry.computer}`}>
                    <CpuIcon size={14} strokeWidth={2} />
                  </span>
                  {entry.computer}
                </div>
                <span
                  className={`history__result-tag history__result-tag--${entry.result}`}
                >
                  {entry.result === 'win' ? 'Won' : entry.result === 'lose' ? 'Lost' : 'Draw'}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
