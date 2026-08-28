import React, { useEffect } from 'react';
import MainTemplate from '../../templates/MainTemplate/index';
import Container from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { FormRow } from '../../components/Form';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Chonos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      {/* <Container>
        <MainForm />
      </Container> */}

      <Container>
        <FormRow />
      </Container>
    </MainTemplate>
  );
};

export default Home;
