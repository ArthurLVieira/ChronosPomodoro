import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { TrashIcon } from 'lucide-react';
import Styles from './styles.module.css';
import Container from '../../components/Container';

export const History: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={Styles.buttonContainer}>
            <Button
              icon={<TrashIcon />}
              color='red'
              aria-label='Apagar todo o histórico'
              title='Apagar histórico'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={Styles.responsiveTable}>teste</div>
      </Container>
    </MainTemplate>
  );
};
