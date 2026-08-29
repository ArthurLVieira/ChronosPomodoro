import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskAcontionType, TaskActionsModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel,
): TaskStateModel {
  switch (action.type) {
    case TaskAcontionType.START_TASK: {
      return state;
    }
    case TaskAcontionType.INTERRUPT_TASK: {
      return state;
    }
    case TaskAcontionType.RESET_STATE: {
      return state;
    }
  }
  return state;
}
