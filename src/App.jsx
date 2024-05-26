import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/Elements/Preload/Preload';
import BaseRoutes from './routes/BaseRoutes';
import './styling/main.scss';

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