import { MessageContainer } from './components/MessageContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import './styles/global.css';
import './styles/theme.css';
import { MainRouter } from './routes/MainRouter';

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
