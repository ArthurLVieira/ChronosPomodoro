import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import Heading from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { FormRow } from './components/Form';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <FormRow />
      </Container>
    </>
  );
}

export default App;
