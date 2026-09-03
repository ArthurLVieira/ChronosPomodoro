import Container from '../../components/Container';
import SettingsForm from '../../components/SettingsForm';
import MainTemplate from '../../templates/MainTemplate';

export const Settings: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        <SettingsForm />
      </Container>
    </MainTemplate>
  );
};
