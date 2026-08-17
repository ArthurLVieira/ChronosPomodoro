import { TimerIcon } from 'lucide-react';
import Styles from './styles.module.css';

export function Logo() {
  return (
    <div className={Styles.logo}>
      <a className={Styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
