import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { MenuLink } from '../Link';
import Styles from './styles.module.css';
import React, { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function Menu() {
  type prevTheme = 'dark' | 'light';

  const [theme, setTheme] = useLocalStorage<prevTheme>('theme', 'dark');

  function hendleThemeChange(
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    evt.preventDefault();
    setTheme(prev => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useLocalStorage(
    'theme',
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]),
  );

  return (
    <nav className={Styles.menu}>
      <MenuLink to='/' aria-label='Home' title='Home'>
        <HouseIcon />
      </MenuLink>

      <MenuLink to='/history' aria-label='History' title='History'>
        <HistoryIcon />
      </MenuLink>

      <MenuLink to='/settings' aria-label='Settings' title='Settings'>
        <SettingsIcon />
      </MenuLink>

      <MenuLink
        to='#'
        onClick={hendleThemeChange}
        title='Mudar tema'
        aria-label='Mudar tema'
      >
        {nextThemeIcon[theme]}
      </MenuLink>
    </nav>
  );
}
