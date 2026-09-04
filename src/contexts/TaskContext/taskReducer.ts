import type { TaskStateModel } from '../../models/TaskStateModel';
import { FormatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { GetNextCycle } from '../../utils/getNextCycle';
import { TaskAcontionType, type TaskActionsModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel,
): TaskStateModel {
  switch (action.type) {
    case TaskAcontionType.START_TASK: {
      const newTask = action.payload;
      const secondsRemaining = action.payload.duration * 60;
      const nextCycle = GetNextCycle({ currentCycle: state.currentCycle });

      return {
        ...state,
        config: { ...state.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: FormatSecondsToMinutes({
          seconds: secondsRemaining,
        }),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskAcontionType.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          return state.activeTask && state.activeTask.id === task.id
            ? { ...task, completeDate: Date.now() }
            : task;
        }),
      };
    }
    case TaskAcontionType.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskAcontionType.RESET_STATE: {
      return state;
    }
    case TaskAcontionType.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: FormatSecondsToMinutes({
          seconds: action.payload.secondsRemaining,
        }),
      };
    }
    case TaskAcontionType.CONFIG_STATE: {
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    }
    case TaskAcontionType.REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    }
    case TaskAcontionType.REMOVE_ALL_TASKS: {
      return {
        ...state,
        tasks: [],
      };
    }
    default: {
      return state;
    }
  }
}
