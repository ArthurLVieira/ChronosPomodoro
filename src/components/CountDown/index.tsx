import type React from 'react';
import type { HomeProps } from '../../pages/Home';
import Styles from './styles.module.css';

export const CountDown: React.FC<HomeProps> = ({ state }) => {
  return (
    <div className={Styles.container}>{state.formattedSecondsRemaining}</div>
  );
};
