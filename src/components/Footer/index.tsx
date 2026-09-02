import { Link } from 'react-router';
import Styles from './styles.module.css';
import RouterLink from '../RouterLink';

export function Footer() {
  return (
    <footer className={Styles.footer}>
      <Link to='/about-pomodoro'>Entenda como funciona a técnica pomodoro</Link>
      <RouterLink to='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink>
    </footer>
  );
}
