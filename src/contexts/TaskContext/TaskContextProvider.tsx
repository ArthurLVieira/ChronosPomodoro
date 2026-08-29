import { useEffect, useState } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';
import { TaskContext } from './TaskContext';

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<TaskStateModel>(initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
};
