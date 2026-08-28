import type React from 'react';

interface getNextCycleProps {
  currentCycle: number;
}

export const GetNextCycle: React.FC<getNextCycleProps> = ({ currentCycle }) => {
  return currentCycle >= 0 && currentCycle <= 8
    ? currentCycle === 0 || currentCycle === 8
      ? 1
      : currentCycle + 1
    : null;
};
