import Styles from './styles.module.css';

export function FormRow() {
  return (
    <>
      <form className={Styles.form} action=''>
        <div className={Styles.formRow}>
          <label htmlFor='myInput'>task</label>
          <input id='myInput' type='text' />
        </div>

        <div className={Styles.formRow}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={Styles.formRow}>
          <p>Ciclos</p>
          <p>0 0 0 0 0 0 0 0</p>
        </div>

        <div className={Styles.formRow}>
          <button>enviar</button>
        </div>
      </form>
    </>
  );
}
