import { Mountain, FileText, Scissors } from 'lucide-react';
import './ChoiceCards.css';

const CHOICES = [
  { id: 'rock', label: 'Rock', Icon: Mountain },
  { id: 'paper', label: 'Paper', Icon: FileText },
  { id: 'scissors', label: 'Scissors', Icon: Scissors },
];

export default function ChoiceCards({ onSelect, disabled }) {
  return (
    <div>
      <p className="choices__prompt">
        {disabled ? 'See the result below' : 'Pick your move'}
      </p>
      <div className="choices">
        {CHOICES.map(({ id, label, Icon }) => (
          <button
            key={id}
            id={`choice-${id}`}
            className={`choice-btn choice-btn--${id} ${disabled ? 'choice-btn--disabled' : ''}`}
            onClick={() => onSelect(id)}
            disabled={disabled}
            aria-label={`Choose ${label}`}
          >
            <div className="choice-btn__icon-wrap">
              <Icon size={26} strokeWidth={2} />
            </div>
            <span className="choice-btn__label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
