import React, { useEffect } from 'react';
import MainTemplate from '../../templates/MainTemplate/index';
import Container from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Chonos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};

export default Home;
