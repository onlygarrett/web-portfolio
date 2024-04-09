import './styling/main.scss';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/BaseRoutes';
import Preloader from './components/Elements/Preload/Preload';

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;