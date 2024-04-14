import s from './Base.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const Base = ({ children }) => {
  return (
    <div className={s.template}>

      <Header>
        <MainNavigation />
      </Header>

      <div className={s.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default Base;