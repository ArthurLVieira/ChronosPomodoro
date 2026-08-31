import type React from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskStateModel } from '../../models/TaskStateModel';

interface TipsProps {
  nextCycleType: keyof TaskStateModel['config'];
}

const Tips: React.FC<TipsProps> = ({ nextCycleType }) => {
  const { state } = useTaskContext();

  const tipsForWhenActive = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo <b>ciclo</b> é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo <b>descaso</b> é de {state.config.shortBreakTime}min
      </span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActive[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};

export default Tips;
