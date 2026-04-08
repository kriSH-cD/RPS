import { Swords } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Swords size={26} className="header__icon" />
        Rock · Paper · Scissors
        <span className="header__badge">Enhanced</span>
      </h1>
      <p className="header__subtitle">
        Choose your weapon — outsmart the computer!
      </p>
    </header>
  );
}
