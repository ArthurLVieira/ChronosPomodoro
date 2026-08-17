import Styles from './styles.module.css';
import Input from '../Imput';

export function FormRow() {

  return (
    <>
      <form className={Styles.form} action=''>
        <div className={Styles.formRow}>
          <Input
            id='teste'
            label='E-mail'
            showLabel={true}
            placeholder=''
            borderColor='var(--primary)'
            backgroundColor='var(--gray-900)'
            textColor='var(--text-over-primary-dark)'
            type='string'
          />
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
