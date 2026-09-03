import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import Home from '../../pages/Home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import NotFound from '../../pages/NotFound';
import { useEffect } from 'react';
import { History } from '../../pages/History';

const scrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />} />
        <Route path='/history' element={<History />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <scrollToTop />
    </BrowserRouter>
  );
}
