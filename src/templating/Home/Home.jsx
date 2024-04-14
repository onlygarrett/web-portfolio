import s from './Home.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Nav/Main/Main';

const Home = ({ children }) => {
  return (
    <div className={s.template}>

      <Header>
        <Main />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default Home;