import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import { Link } from '../Link';
import Styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function Menu() {

  type prevTheme = 'dark' | 'ligth';

  const [ theme, setTheme ] = useLocalStorage<prevTheme>('theme', 'dark');

  function hendleThemeChange(
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    evt.preventDefault();
    setTheme(prev => {
      const nextTheme = prev === 'dark' ? 'ligth' : 'dark';
      return nextTheme;
    })
  }

  const nextThemeIcon = {
    dark: <SunIcon/>,
    ligth: <MoonIcon/>
  };

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
          title='Mudar tema'
          aria-label='Mudar tema'
        >
          {nextThemeIcon[theme]}  
        </Link>
    </nav>
  );
}
