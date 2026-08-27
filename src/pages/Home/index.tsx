import React, { useEffect } from 'react';
import MainTemplate from '../../templates/MainTemplate/index';
import Container from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { FormRow } from '../../components/Form';

export interface HomeProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const Home: React.FC<HomeProps> = props => {
  useEffect(() => {
    document.title = 'Chonos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <CountDown {...props} />
      </Container>

      {/* <Container>
        <MainForm />
      </Container> */}

      <Container>
        <FormRow {...props} />
      </Container>
    </MainTemplate>
  );
};

export default Home;
