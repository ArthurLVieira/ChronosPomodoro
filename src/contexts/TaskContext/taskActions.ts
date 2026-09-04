import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskAcontionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CONFIG_STATE = 'CONFIG_STATE',
  REMOVE_TASK = 'REMOVE_TASK',
  REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS',
}

export type TaskActionsModelWithPayload =
  | {
      type: TaskAcontionType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskAcontionType.COUNT_DOWN;
      payload: Pick<TaskStateModel, 'secondsRemaining'>;
    }
  | {
      type: TaskAcontionType.CONFIG_STATE;
      payload: Partial<TaskStateModel['config']>;
    }
  | {
      type: TaskAcontionType.REMOVE_TASK;
      payload: TaskModel['id'];
    };

export type TaskActionsModelWithoutPayload =
  | { type: TaskAcontionType.RESET_STATE }
  | { type: TaskAcontionType.INTERRUPT_TASK }
  | { type: TaskAcontionType.COMPLETE_TASK };

export type TaskActionsModel =
  | TaskActionsModelWithPayload
  | TaskActionsModelWithoutPayload;
