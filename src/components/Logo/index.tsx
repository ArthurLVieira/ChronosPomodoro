import { TimerIcon } from 'lucide-react';
import Styles from './styles.module.css';
import RouterLink from '../RouterLink';

export function Logo() {
  return (
    <div className={Styles.logo}>
      <RouterLink className={Styles.logoLink} to='#'>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}
