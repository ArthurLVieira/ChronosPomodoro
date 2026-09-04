import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import './styles/global.css';
import './styles/theme.css';
import { MainRouter } from './routes/MainRouter';
import GlobalConfirmDialog from './Globals/GlobalConfirmDialog';

function App() {
  return (
    <TaskContextProvider>
      <TaskContextProvider>
        <MainRouter />
        <GlobalConfirmDialog />
      </TaskContextProvider>
    </TaskContextProvider>
  );
}

export default App;
