import type React from 'react';
import Input from '../Imput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import Button from '../Button';
import { SaveIcon } from 'lucide-react';
import Styles from './styles.module.css';

const SettingsForm: React.FC = () => {
  const { state, dispatch } = useTaskContext();

  return (
    <>
      <form className='form' action=''>
        <div className='formRow'>
          <Input
            id='workTime'
            labelText='defina o tempo de foco (em minutos)'
            placeholder='Digite aqui...'
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='number'
            defaultValue={state.config.workTime}
          />
        </div>

        <div className='formRow'>
          <Input
            id='shortBreak'
            labelText='defina o tempo de descanso curto (em minutos)'
            placeholder='Digite aqui...'
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='number'
            defaultValue={state.config.shortBreakTime}
          />
        </div>

        <div className='formRow'>
          <Input
            id='longBreak'
            labelText='defina o tempo de descanso longo (em minutos)'
            placeholder='Digite aqui...'
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='number'
            defaultValue={state.config.longBreakTime}
          />
        </div>

        <div className='formRow'>
          <Button
            key='breakTask'
            aria-label='Parar tarefa'
            title='Parar tarefa'
            type='button'
            icon={<SaveIcon />}
            color='green'
          />
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
