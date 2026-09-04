import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { SettingsForm } from '../../components/SettingsForm';
import MainTemplate from '../../templates/MainTemplate';

export const Settings: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações ⚙️</Heading>
      </Container>
      <Container>
        <SettingsForm />
      </Container>
    </MainTemplate>
  );
};
