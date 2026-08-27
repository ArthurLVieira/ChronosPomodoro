import { useState } from 'react';
import Home from './pages/Home';
import './styles/global.css';
import './styles/theme.css';
import type { TaskStateModel } from './models/TaskStateModel';

export const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:05',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

function App() {
  const [state, setState] = useState<TaskStateModel>(initialState);

  return <Home setState={setState} state={state} />;
}

export default App;
