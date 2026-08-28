import Styles from './styles.module.css';
import Input from '../Imput';
import { Cyles } from '../Cycles';
import Button from '../Button';
import { HouseIcon } from 'lucide-react';
import type React from 'react';
import { useTaskContext } from '../../contexts/TaskContext';
import { useRef, useState } from 'react';

export const FormRow: React.FC = () => {
  const { state } = useTaskContext();
  const [ taskName, setTaskName ] = useState<string>();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreate(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('deu certo');
    
  }

  function handleInputTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTaskName(() => {
      return e.target.value;
    })
  }

  function handleClickChange(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    console.log(taskNameInput.current?.value)
  }

  return (
    <>
      <form onSubmit={handleCreate} className={Styles.form} action=''>
        <div className={Styles.formRow}>
          <Input
            id='task-input'
            labelText='task'
            placeholder='Task'
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='string'
            ref={taskNameInput}
            // value={taskName}
            // onChange={handleInputTaskChange}
          />
        </div>

        <div className={Styles.formRow}>
          <p>Próximo intervalo é de {state.config.workTime}</p>
        </div>

        <div className={Styles.formRow}>
          <Cyles />
        </div>

        <div className={Styles.formRow}>
          <Button type='submit' onClick={handleClickChange}>
            <HouseIcon />
          </Button>
        </div>
      </form>
    </>
  );
}
