import { useEffect, useReducer } from 'react';
import { taskReducer } from './taskReducer';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '../../Workers/TimerWorkerManager';
import { TaskAcontionType } from './taskActions';

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      console.log('Worker COMPLETED');
      dispatch({ type: TaskAcontionType.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskAcontionType.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    console.log(state);

    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
