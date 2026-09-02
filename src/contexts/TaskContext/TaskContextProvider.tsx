import { useEffect, useReducer, useRef } from 'react';
import { taskReducer } from './taskReducer';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '../../Workers/TimerWorkerManager';
import { TaskAcontionType } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();
  let playBeepRef = useRef<ReturnType<typeof loadBeep>>(null);

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }

      dispatch({ type: TaskAcontionType.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskAcontionType.COUNT_DOWN,
        payload: { ...state, secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = !!state.activeTask
      ? `${state.formattedSecondsRemaining} - Chronos Pomodoro`
      : 'Chronos Pomodoro';

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
