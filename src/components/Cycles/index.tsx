import Styles from './styles.module.css';

export function Cyles() {
  return (
    <>
      <div className={Styles.cyclesContainer}>
        <span>Ciclos:</span>
        <div className={Styles.cyclesDots}>
            <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.shortBreakTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.shortBreakTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.shortBreakTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.workTime}`}></span>
            <span className={`${Styles.cycleDot} ${Styles.longBreakTime}`}></span>
        </div>
      </div>
    </>
  );
}
