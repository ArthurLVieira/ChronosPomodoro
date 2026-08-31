import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskAcontionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionsModelWithPayload =
  | {
      type: TaskAcontionType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskAcontionType.COUNT_DOWN;
      payload: Pick<TaskStateModel, 'secondsRemaining'>;
    };

export type TaskActionsModelWithoutPayload =
  | { type: TaskAcontionType.RESET_STATE }
  | { type: TaskAcontionType.INTERRUPT_TASK }
  | { type: TaskAcontionType.COMPLETE_TASK };

export type TaskActionsModel =
  | TaskActionsModelWithPayload
  | TaskActionsModelWithoutPayload;
