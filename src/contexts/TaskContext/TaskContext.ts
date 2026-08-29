import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialState,
  setState: () => null,
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
