import Styles from './styles.module.css';
import Input from '../Imput';
import { Cyles } from '../Cycles';
import Button from '../Button';
import { HouseIcon } from 'lucide-react';
import type { HomeProps } from '../../pages/Home';

export function FormRow(props: HomeProps) {
  const { state, setState } = props;

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setState(prev => {
      return {
        ...prev,
        config: {
          ...prev.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  };

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
          <p>Próximo intervalo é de {state.config.workTime}</p>
        </div>

        <div className={Styles.formRow}>
          <Cyles />
        </div>

        <div className={Styles.formRow}>
          <Button type='button' onClick={handleChange}>
            <HouseIcon />
          </Button>
        </div>
      </form>
    </>
  );
}
