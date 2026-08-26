import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import { Link } from '../Link';
import Styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function Menu() {

  type prevTheme = 'dark' | 'ligth';

  const [ theme, setTheme ] = useState<prevTheme>('dark');

  function hendleThemeChange(
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    evt.preventDefault();
    setTheme(prev => {
      const nextTheme = prev === 'dark' ? 'ligth' : 'dark';
      return nextTheme;
    })
  }

  useLocalStorage('theme', useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [ theme ]));

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

        <Link
          href='#'
          onClick={hendleThemeChange}
        >
          <SunIcon />  
        </Link>
    </nav>
  );
}
