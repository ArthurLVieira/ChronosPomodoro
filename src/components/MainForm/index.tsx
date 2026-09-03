import Input from '../Imput';
import Cyles from '../Cycles';
import Button from '../Button';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import type React from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { GetNextCycleType } from '../../utils/getNextCycleType';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskAcontionType } from '../../contexts/TaskContext/taskActions';
import Tips from '../Tips';

export const MainForm: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycleType = GetNextCycleType({ currentCycle: state.currentCycle });
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  function handleCreate(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;
    else if (!taskNameInput.current.value.trim()) {
      showMessage.warning('Task deve estar preenchida!');
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

    dispatch({ type: TaskAcontionType.START_TASK, payload: newTask });

    showMessage.seccess('Tarefa iniciada.');
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    dispatch({ type: TaskAcontionType.INTERRUPT_TASK });

    showMessage.info('Tarefa interrompida.');
  }

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
            defaultValue={lastTaskName}
          />
        </div>

        <div className='formRow'>
          <Tips nextCycleType={nextCycleType} />
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
          {!!state.activeTask && (
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
