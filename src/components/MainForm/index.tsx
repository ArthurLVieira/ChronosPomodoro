import Input from '../Imput';
import Cyles from '../Cycles';
import Button from '../Button';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import type React from 'react';
import { useTaskContext } from '../../contexts/TaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { GetNextCycle } from '../../utils/getNextCycle';
import { GetNextCycleType } from '../../utils/getNextCycleType';
import { FormatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { useRef } from 'react';

export const MainForm: React.FC = () => {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = GetNextCycle({ currentCycle: state.currentCycle });
  const nextCycleType = GetNextCycleType({ currentCycle: state.currentCycle });

  function handleCreate(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;
    else if (!taskNameInput.current.value.trim()) {
      alert('Task deve estar preenchida!');
      return;
    }

    const taskName = taskNameInput.current.value.trim();

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prev => {
      return {
        ...prev,
        config: { ...prev.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: FormatSecondsToMinutes({
          seconds: secondsRemaining,
        }),
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setState(prev => {
      return {
        ...prev,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    });
  };

  return (
    <>
      <form onSubmit={handleCreate} className='form' action=''>
        <div className='formRow'>
          <Input
            id='taskInput'
            labelText='task'
            placeholder='Digite aqui...'
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='string'
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>

        <div className='formRow'>
          <p>
            Próximo <strong>intervalo</strong> é de{' '}
            <strong>{state.config.workTime}</strong>
          </p>
        </div>

        {state.currentCycle > 0 && (
          <div className='formRow'>
            <Cyles />
          </div>
        )}

        <div className='formRow'>
          {!state.activeTask && (
            <Button
              key='initTask'
              aria-label='Iniciar nova tarefa'
              title='Iniciar nova tarefa'
              type='submit'
              icon={<PlayCircleIcon />}
            />
          )} 
          {!!state.activeTask &&(
            <Button
              key='breakTask'
              aria-label='Parar tarefa'
              title='Parar tarefa'
              type='button'
              icon={<StopCircleIcon />}
              color='red'
              onClick={handleInterruptTask}
            />
          )}
        </div>
      </form>
    </>
  );
};
