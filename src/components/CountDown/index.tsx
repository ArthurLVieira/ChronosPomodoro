import type React from 'react';
import Styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export const CountDown: React.FC = () => {
  const { state } = useTaskContext();
  return (
    <div className={Styles.container}>{state.formattedSecondsRemaining}</div>
  );
};
