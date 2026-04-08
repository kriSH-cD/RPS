import { RotateCcw, RefreshCw } from 'lucide-react';
import './ActionButtons.css';

export default function ActionButtons({ hasResult, onNextRound, onReset }) {
  return (
    <div className="actions">
      {hasResult && (
        <button className="btn btn--next" id="btn-next" onClick={onNextRound}>
          <RefreshCw size={15} /> Next Round
        </button>
      )}
      <button className="btn btn--reset" id="btn-reset" onClick={onReset}>
        <RotateCcw size={15} /> Reset All
      </button>
    </div>
  );
}
