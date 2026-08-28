import type React from 'react';
import type { TaskModel } from '../models/TaskModel';

interface getNextCycleTypeProps {
  currentCycle: number;
}

export const GetNextCycleType: React.FC<getNextCycleTypeProps> = ({
  currentCycle,
}): TaskModel['type'] => {
  return currentCycle % 8 === 0
    ? 'longBreakTime'
    : currentCycle % 2 === 0
      ? 'shortBreakTime'
      : 'workTime';
};
