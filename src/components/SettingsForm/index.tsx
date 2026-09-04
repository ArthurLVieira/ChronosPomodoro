import type React from 'react';
import Input from '../Imput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import Button from '../Button';
import { SaveIcon } from 'lucide-react';
import Styles from './styles.module.css';
import { useRef } from 'react';
import { showMessage } from '../../adapters/showMessage';
import { TaskAcontionType } from '../../contexts/TaskContext/taskActions';

export const SettingsForm: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakInput = useRef<HTMLInputElement>(null);
  const longBreakInput = useRef<HTMLInputElement>(null);

  const handleSaveSettings = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const workTime =
      workTimeInput.current?.valueAsNumber || state.config.workTime;
    const shortBreakTime =
      shortBreakInput.current?.valueAsNumber || state.config.shortBreakTime;
    const longBreakTime =
      longBreakInput.current?.valueAsNumber || state.config.longBreakTime;

    dispatch({
      type: TaskAcontionType.CONFIG_STATE,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.seccess('Configurações salvas com sucesso!');
  };

  return (
    <>
      <form onSubmit={handleSaveSettings} className='form' action=''>
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
            ref={workTimeInput}
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
            ref={shortBreakInput}
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
            ref={longBreakInput}
          />
        </div>

        <div className='formRow'>
          <Button
            key='breakTask'
            aria-label='Parar tarefa'
            title='Parar tarefa'
            type='submit'
            icon={<SaveIcon />}
            color='green'
          />
        </div>
      </form>
    </>
  );
};
