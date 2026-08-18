import Styles from './styles.module.css';
import Input from '../Imput';
import { Cyles } from '../Cycles';

export function FormRow() {

  return (
    <>
      <form className={Styles.form} action=''>
        <div className={Styles.formRow}>
          <Input
            id='teste'
            labelText='E-mail'
            placeholder='teste'
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='string' 
            disabled
          />
        </div>

        <div className={Styles.formRow}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={Styles.formRow}>
        <Cyles />
        </div>

        <div className={Styles.formRow}>
          <button>enviar</button>
        </div>
      </form>
    </>
  );
}
