import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import { Link } from '../Link';
import Styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={Styles.menu}>
        <Link>
          <HouseIcon />  
        </Link>

        <Link>
          <HistoryIcon />  
        </Link>

        <Link>
          <SettingsIcon />  
        </Link>

        <Link>
          <SunIcon />  
        </Link>
    </nav>
  );
}
