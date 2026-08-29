import type { TaskModel } from '../../models/TaskModel';

export enum TaskAcontionType {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionsModelWithPayload =
  | {
      type: TaskAcontionType.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskAcontionType.START_TASK;
      payload: TaskModel;
    };

export type TaskActionsModelWithoutPayload = {
  type: TaskAcontionType.INTERRUPT_TASK;
};

export type TaskActionsModel =
  | TaskActionsModelWithPayload
  | TaskActionsModelWithoutPayload;
