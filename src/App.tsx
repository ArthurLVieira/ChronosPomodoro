import { TaskContextProvider } from './contexts/TaskContext';
import Home from './pages/Home';
import './styles/global.css';
import './styles/theme.css';

function App() {

  return(
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
