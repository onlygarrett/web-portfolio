import MainPage from './MainPage/MainPage';
import IntroPage from './IntroPage/IntroPage';
import Home from '../../templating/Home/Home'
import Backgrounds from '../../components/Elements/Backgrounds/Backgrounds'

const HomePage = () => {
  return (
    <Home>
      <Backgrounds>
        <MainPage />
      </Backgrounds>

      <IntroPage />
    </Home>
  );
};

export default HomePage;