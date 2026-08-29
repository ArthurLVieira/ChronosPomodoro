import type React from 'react';
import { GetNextCycle } from '../../utils/getNextCycle';
import { GetNextCycleType } from '../../utils/getNextCycleType';
import Styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

const Cyles: React.FC = () => {
  const { state } = useTaskContext();

  const cycloStap = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso prolongado',
  };

  return (
    <div className={Styles.cycles}>
      <span>Ciclos:</span>
      <div className={Styles.cyclesDots}>
        {cycloStap.map((_, index) => {
          const nextCycle = GetNextCycle({ currentCycle: index });
          const nextCycleType = GetNextCycleType({ currentCycle: nextCycle });
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${Styles.cycleDot} ${Styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title='Indicador de ciclo de foco'
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Cyles;
